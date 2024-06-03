import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { Switch, rem, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';

export default function LightDarkModeSwitch() {
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();
  const [themeColor, setTheme] = useState('dark');
  useEffect(() => {
    setColorScheme('dark');
  }, []);
  const themeHandler = () => {
    if (themeColor == 'light') {
      setTheme('dark');
      setColorScheme('dark');
    } else if (themeColor == 'dark') {
      setTheme('light');
      setColorScheme('light');
    }
  };

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} onClick={themeHandler} />
  );
}
