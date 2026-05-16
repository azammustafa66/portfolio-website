<template>
  <div class="dark min-h-screen flex flex-col bg-background text-on-background">
    <!-- Top navbar -->
    <nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
      <div class="flex justify-between items-center px-5 md:px-margin-desktop py-4 max-w-container mx-auto">
        <!-- Logo -->
        <NuxtLink to="/" class="font-sans text-headline-md font-bold tracking-tighter text-on-surface hover:text-primary transition-colors">
          AZAM.DEV
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-body-md transition-colors px-3 py-1 rounded hover:bg-primary/10"
            :class="route.path === item.path
              ? 'text-on-surface font-semibold border-b-2 border-primary pb-0.5'
              : 'text-on-surface-variant hover:text-on-surface'"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Connect CTA -->
        <NuxtLink
          to="/contact"
          class="hidden md:inline-flex font-mono text-label-mono bg-secondary-container text-white px-6 py-2 rounded font-semibold ring-1 ring-blue-400 shadow-[0_0_12px_rgba(5,102,217,0.35)] hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(5,102,217,0.6)] transition-all duration-200"
        >
          Connect
        </NuxtLink>

        <!-- Mobile menu icon -->
        <NuxtLink to="/contact" class="md:hidden text-on-surface p-1">
          <span class="material-symbols-outlined">mail</span>
        </NuxtLink>
      </div>
    </nav>

    <!-- Page content -->
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-outline-variant bg-background">
      <div class="flex flex-col md:flex-row justify-between items-center px-5 md:px-margin-desktop py-8 max-w-container mx-auto gap-4 md:gap-0">
        <span class="font-sans text-headline-md font-bold text-on-surface">AZAM.DEV</span>
        <span class="text-caption text-on-surface-variant">© {{ currentYear }} Azam Mustufa Didagur. Built with Nuxt 3.</span>
        <div class="flex gap-6">
          <a href="https://github.com/azammustafa66" target="_blank" rel="noopener" class="text-caption text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/azam20/" target="_blank" rel="noopener" class="text-caption text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://leetcode.com/u/azammustafa/" target="_blank" rel="noopener" class="text-caption text-on-surface-variant hover:text-primary transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>

    <!-- Mobile bottom nav -->
    <nav class="md:hidden fixed bottom-0 w-full bg-background/90 backdrop-blur-md border-t border-outline-variant z-50 flex justify-around items-center py-3">
      <NuxtLink
        v-for="item in mobileNavItems"
        :key="item.path"
        :to="item.path"
        class="flex flex-col items-center gap-0.5 transition-colors"
        :class="route.path === item.path ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'"
      >
        <span class="material-symbols-outlined text-xl" :style="route.path === item.path ? `font-variation-settings: 'FILL' 1` : ''">{{ item.icon }}</span>
        <span class="text-[10px] font-mono">{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const currentYear = new Date().getFullYear()

const navItems = [
  { label: 'Work', path: '/projects' },
  { label: 'Experience', path: '/about' },
]

const mobileNavItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Work', path: '/projects', icon: 'work' },
  { label: 'Experience', path: '/about', icon: 'history' },
  { label: 'Connect', path: '/contact', icon: 'mail' },
]
</script>
