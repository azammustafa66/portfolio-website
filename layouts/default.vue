<template>
  <div class="dark min-h-screen flex flex-col bg-background text-on-background">
    <!-- Top navbar -->
    <nav class="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
      <div class="flex justify-between items-center px-5 md:px-margin-desktop py-4 max-w-container mx-auto">
        <a href="#hero" class="font-sans text-headline-md font-bold tracking-tighter text-on-surface hover:text-primary transition-colors">
          AZAM.DEV
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-body-md text-on-surface-variant hover:text-on-surface transition-colors px-3 py-1 rounded hover:bg-primary/10"
          >
            {{ item.label }}
          </a>
        </div>

        <a
          href="#contact"
          class="hidden md:inline-flex font-mono text-label-mono bg-secondary-container text-white px-6 py-2 rounded font-semibold ring-1 ring-blue-400 shadow-[0_0_12px_rgba(5,102,217,0.35)] hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(5,102,217,0.6)] transition-all duration-200"
        >
          Connect
        </a>

        <a href="#contact" class="md:hidden text-on-surface p-1">
          <span class="material-symbols-outlined">mail</span>
        </a>
      </div>
    </nav>

    <main class="flex-grow pt-20">
      <slot />
    </main>

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
      <a
        v-for="item in mobileNavItems"
        :key="item.href"
        :href="item.href"
        class="flex flex-col items-center gap-0.5 text-on-surface-variant hover:text-on-surface transition-colors"
      >
        <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
        <span class="text-[10px] font-mono">{{ item.label }}</span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

const mobileNavItems = [
  { label: 'Home', href: '#hero', icon: 'home' },
  { label: 'Work', href: '#projects', icon: 'work' },
  { label: 'Experience', href: '#experience', icon: 'history' },
  { label: 'Connect', href: '#contact', icon: 'mail' },
]
</script>
