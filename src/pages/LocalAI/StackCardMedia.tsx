import { Image } from '@mantine/core';

import hermesLogo from './img/stack/hermes-logo.png';
import openWebUiDemo from './img/stack/open-webui-demo.png';
import { TelegramChatMock } from './img/stack/TelegramChatMock';
import { VllmModelsVisual } from './img/stack/VllmModelsVisual';
import { VoiceStackVisual } from './img/stack/VoiceStackVisual';
import classes from './StackCardMedia.module.css';

export type StackCardId = 'vllm' | 'openWebUI' | 'hermes' | 'voice';

interface StackCardMediaProps {
  cardId: StackCardId;
  alt: string;
}

export function StackCardMedia({ cardId, alt }: StackCardMediaProps) {
  switch (cardId) {
    case 'vllm':
      return (
        <div className={classes.media}>
          <VllmModelsVisual />
        </div>
      );
    case 'openWebUI':
      return (
        <div className={`${classes.media} ${classes.mediaScreenshot}`}>
          <Image src={openWebUiDemo} alt={alt} className={classes.screenshot} />
        </div>
      );
    case 'hermes':
      return (
        <div className={`${classes.media} ${classes.mediaSplit}`}>
          <div className={classes.hermesBrand}>
            <Image src={hermesLogo} alt="Hermes Agent" className={classes.hermesLogo} />
            <span className={classes.hermesLabel}>Nous Hermes Agent</span>
          </div>
          <div className={classes.hermesChat}>
            <TelegramChatMock />
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className={classes.media}>
          <VoiceStackVisual />
        </div>
      );
    default:
      return null;
  }
}
