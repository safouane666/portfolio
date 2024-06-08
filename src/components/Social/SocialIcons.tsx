import { Flex } from '@mantine/core';
import React from 'react';

export default function SocialIcons() {
  return (
    <Flex gap="2rem">
      <a href="https://www.linkedin.com/in/regaieg-safouane-223112252/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedin"
          height={40}
        />
      </a>

      <a href="https://github.com/safouane666" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" height={40} />{' '}
      </a>

      <a href="https://instagram.com/regaiegsafouane" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
          alt="instagram"
          height={40}
        />
      </a>

      <a href="https://www.fiverr.com/safouane_rg" target="_blank">
        <img
          src="https://user-images.githubusercontent.com/45782139/77510964-c99c5300-6e91-11ea-9a6d-f1f33b56c846.png"
          alt="Fiverr"
          height={40}
        />{' '}
      </a>
    </Flex>
  );
}
