import React, { useState, useEffect } from "react";

const CallStatus = {
  INACTIVE: "INACTIVE",
  CONNECTING: "CONNECTING",
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
};

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
  vapi,
  interviewer,
  createFeedback,
  router,
}) => {
  const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
  const [messages, setMessages] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    function onCallStart() {
      setCallStatus(CallStatus.ACTIVE);
    }

    function onCallEnd() {
      setCallStatus(CallStatus.FINISHED);
    }

    function onMessage(message) {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [...prev, { role: message.role, content: message.transcript }]);
      }
    }

    function onSpeechStart() {
      setIsSpeaking(true);
    }

    function onSpeechEnd() {
      setIsSpeaking(false);
    }

    function onError(error) {
      console.log("Error:", error);
    }

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, [vapi]);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    async function handleGenerateFeedback() {
      const { success, feedbackId: id } = await createFeedback({
        interviewId,
        userId,
        transcript: messages,
        feedbackId,
      });

      if (success && id) {
        router.push(`/interview/${interviewId}/feedback`);
      } else {
        console.log("Error saving feedback");
        router.push("/");
      }
    }

    if (callStatus === CallStatus.FINISHED) {
      if (type === "generate") {
        router.push("/");
      } else {
        handleGenerateFeedback();
      }
    }
  }, [messages, callStatus, feedbackId, interviewId, router, type, userId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID, {
        variableValues: {
          username: userName,
          userid: userId,
        },
      });
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions.map((q) => `- ${q}`).join("\n");
      }
      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
      });
    }
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <div>
      <div className="call-view" style={{ display: "flex", gap: "20px" }}>
        <div className="card-interviewer" style={{ border: "1px solid #ccc", padding: 10 }}>
          <img
            src="/ai-avatar.png"
            alt="profile-image"
            width={65}
            height={54}
            style={{ objectFit: "cover" }}
          />
          {isSpeaking && <span style={{ color: "green", fontWeight: "bold" }}>Speaking...</span>}
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border" style={{ border: "1px solid #ccc", padding: 10 }}>
          <img
            src="/user-avatar.png"
            alt="profile-image"
            width={120}
            height={120}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <h3>{userName}</h3>
        </div>
      </div>

      {messages.length > 0 && (
        <div
          className="transcript-border"
          style={{ border: "1px solid #ddd", marginTop: 20, padding: 10, minHeight: 50 }}
        >
          <p>{lastMessage}</p>
        </div>
      )}

      <div style={{ marginTop: 20, textAlign: "center" }}>
        {callStatus !== CallStatus.ACTIVE ? (
          <button onClick={handleCall} disabled={callStatus === CallStatus.CONNECTING}>
            {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED
              ? "Call"
              : "..."}
          </button>
        ) : (
          <button onClick={handleDisconnect}>End</button>
        )}
      </div>
    </div>
  );
};

export default Agent;
