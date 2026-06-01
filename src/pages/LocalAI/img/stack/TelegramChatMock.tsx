import classes from './TelegramChatMock.module.css';

/** Stylized Telegram chat preview for Hermes agent card */
export function TelegramChatMock() {
  return (
    <div className={classes.wrap} aria-hidden>
      <div className={classes.header}>
        <span className={classes.avatar}>H</span>
        <div>
          <div className={classes.botName}>Hermes Agent</div>
          <div className={classes.status}>online</div>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={`${classes.bubble} ${classes.incoming}`}>
          Ready on your local stack. Ask me to run tasks, search docs, or automate a workflow.
        </div>
        <div className={`${classes.bubble} ${classes.outgoing}`}>
          Summarize today&apos;s server health and flag anything that needs attention.
        </div>
        <div className={`${classes.bubble} ${classes.incoming}`}>
          All vLLM workers healthy. Open WebUI latency is normal. No action required.
        </div>
      </div>
    </div>
  );
}
