import { IconBrandWhatsapp } from '@tabler/icons-react';

import classes from './WhatsAppAgentVisual.module.css';

/** WhatsApp Business agent chat preview for the WebDev AI section */
export function WhatsAppAgentVisual() {
  return (
    <div className={classes.wrap} aria-hidden>
      <div className={classes.header}>
        <span className={classes.avatar}>
          <IconBrandWhatsapp size={20} />
        </span>
        <div>
          <div className={classes.botName}>Business Assistant</div>
          <div className={classes.status}>online · auto-reply</div>
        </div>
        <span className={classes.badge}>24/7</span>
      </div>
      <div className={classes.messages}>
        <div className={`${classes.bubble} ${classes.outgoing}`}>
          Hi! What are your opening hours and delivery options?
          <span className={classes.meta}>09:41</span>
        </div>
        <div className={`${classes.bubble} ${classes.incoming}`}>
          We are open 09:00–20:00 every day. Delivery is available in Casablanca and Rabat —
          usually within 24–48h. Want me to share pricing from our catalog?
          <span className={classes.meta}>09:41 · from your data</span>
        </div>
        <div className={`${classes.bubble} ${classes.outgoing}`}>
          Yes, send the starter pack price.
          <span className={classes.meta}>09:42</span>
        </div>
        <div className={`${classes.bubble} ${classes.incoming}`}>
          Starter pack: 299 MAD (VAT included). I can also book a callback or take your order
          here.
          <span className={classes.meta}>09:42 · from your data</span>
        </div>
      </div>
    </div>
  );
}
