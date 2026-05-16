<template>
  <div class="px-5 md:px-margin-desktop max-w-container mx-auto w-full pb-section-gap">
    <!-- Header -->
    <section class="mt-section-gap mb-16 max-w-3xl">
      <h1 class="font-sans text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">
        Initialize Connection.
      </h1>
      <p class="font-sans text-body-lg text-on-surface-variant">
        Whether you're looking to discuss backend architecture, a potential role, or a collaboration —
        I'm currently available for selected engagements. Reach out directly below.
      </p>
    </section>

    <!-- Bento grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <!-- Contact form -->
      <div class="lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant p-6 md:p-10 hover:shadow-[0_0_20px_rgba(190,198,224,0.05)] transition-shadow duration-300 relative overflow-hidden group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
        <div class="relative z-10">
          <h2 class="font-sans text-headline-md text-on-surface mb-8 border-b border-outline-variant pb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">mail</span>
            Direct Message
          </h2>
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block font-mono text-label-mono text-on-surface-variant mb-2">
                  Identifier <span class="text-error">*</span>
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                  class="w-full bg-background border border-outline-variant text-on-surface font-sans text-body-md rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors px-4 py-3 placeholder:text-outline"
                />
              </div>
              <div>
                <label class="block font-mono text-label-mono text-on-surface-variant mb-2">
                  Return Address <span class="text-error">*</span>
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                  class="w-full bg-background border border-outline-variant text-on-surface font-sans text-body-md rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors px-4 py-3 placeholder:text-outline"
                />
              </div>
            </div>
            <div>
              <label class="block font-mono text-label-mono text-on-surface-variant mb-2">
                Payload <span class="text-error">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Enter your message here..."
                required
                class="w-full bg-background border border-outline-variant text-on-surface font-sans text-body-md rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors px-4 py-3 resize-y placeholder:text-outline"
              />
            </div>
            <div class="pt-2 flex items-center justify-between flex-wrap gap-4">
              <p class="font-sans text-caption text-on-surface-variant hidden md:block">
                I typically respond within 24 hours.
              </p>
              <button
                type="submit"
                :disabled="submitting"
                class="w-full md:w-auto inline-flex justify-center items-center gap-2 font-mono text-label-mono bg-primary text-on-primary px-8 py-3 rounded hover:bg-primary-fixed hover:shadow-[0_0_15px_rgba(190,198,224,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ submitting ? 'Sending...' : 'Transmit' }}
                <span class="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            <p v-if="sent" class="font-mono text-label-mono text-secondary">
              ✓ Message sent. I'll be in touch soon.
            </p>
            <p v-if="error" class="font-mono text-label-mono text-error">
              ✗ Something went wrong. Try emailing directly at azammustafa66@gmail.com
            </p>
          </form>
        </div>
      </div>

      <!-- Right sidebar -->
      <div class="lg:col-span-4 flex flex-col gap-gutter">
        <!-- Status card -->
        <div class="bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col gap-4">
          <h3 class="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider">System Status</h3>
          <div class="flex items-center gap-3">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span class="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <span class="font-sans text-body-md text-on-surface">Accepting new requests</span>
          </div>
          <div class="pt-3 border-t border-outline-variant">
            <p class="font-sans text-caption text-on-surface-variant mb-1">Location</p>
            <p class="font-sans text-body-md text-on-surface flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-primary">location_on</span>
              Bangalore, India · Open to Remote
            </p>
          </div>
        </div>

        <!-- External links card -->
        <div class="bg-surface-container rounded-xl border border-outline-variant p-6 flex-grow">
          <h3 class="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-6">External Nodes</h3>
          <div class="space-y-4">
            <a
              v-for="link in externalLinks"
              :key="link.label"
              :href="link.href"
              :target="link.download ? '_self' : '_blank'"
              :download="link.download ? '' : undefined"
              rel="noopener"
              class="group flex items-center justify-between p-4 rounded-lg bg-background border border-outline-variant hover:border-primary transition-colors duration-300"
            >
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">{{ link.icon }}</span>
                <div>
                  <p class="font-sans text-body-md text-on-surface font-semibold">{{ link.label }}</p>
                  <p class="font-sans text-caption text-on-surface-variant">{{ link.desc }}</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">{{ link.download ? 'download' : 'arrow_outward' }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)
const error = ref(false)
const submitting = ref(false)

async function handleSubmit() {
  submitting.value = true
  error.value = false
  try {
    const res = await fetch('https://formspree.io/f/xjgzbkvb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
    })
    if (res.ok) {
      sent.value = true
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      error.value = true
    }
  } catch {
    error.value = true
  } finally {
    submitting.value = false
  }
}

const externalLinks = [
  { label: 'Resume', desc: 'Download PDF', icon: 'download', href: '/Azam-SWE.pdf', download: true },
  { label: 'Email', desc: 'azammustafa66@gmail.com', icon: 'mail', href: 'mailto:azammustafa66@gmail.com', download: false },
  { label: 'GitHub', desc: 'Review code repositories', icon: 'code', href: 'https://github.com/azammustafa66', download: false },
  { label: 'LinkedIn', desc: 'Professional history', icon: 'work', href: 'https://www.linkedin.com/in/azam20/', download: false },
  { label: 'LeetCode', desc: '281+ problems · Top 13%', icon: 'psychology', href: 'https://leetcode.com/u/azammustafa/', download: false },
]
</script>
