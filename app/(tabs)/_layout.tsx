import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Refugio',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="files/index"
        options={{
          title: 'Pergaminos',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="file-tray-full-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="upload/index"
        options={{
          title: 'Subir',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="cloud-upload-outline" color={color} />,
        }}
      />

    </Tabs>
  );
}
