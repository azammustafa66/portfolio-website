<template>
  <div class="px-5 md:px-margin-desktop max-w-container mx-auto w-full">

    <!-- ── HERO ── -->
    <section id="hero" class="min-h-[92vh] flex flex-col justify-center max-w-3xl py-24">
      <div class="inline-flex items-center gap-2 bg-surface-container border border-outline-variant px-3 py-1 rounded-full w-fit mb-8">
        <span class="w-2 h-2 rounded-full bg-secondary-container glow-blue" />
        <span class="font-mono text-label-mono text-on-surface-variant">System Operational · IBM, Bangalore</span>
      </div>

      <h1 class="font-sans text-headline-xl-mobile md:text-headline-xl text-on-surface leading-tight mb-6">
        Software Engineer<br />at IBM
      </h1>

      <p class="font-sans text-body-lg text-on-surface-variant max-w-2xl mb-8">
        Fresh CS graduate working on SAP SuccessFactors cloud integrations at IBM.
        I focus on quality engineering and test automation at work, and build backend
        systems with Node.js, Express, and MongoDB in my own time.
      </p>

      <div class="flex flex-wrap gap-6 mb-12">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col">
          <span class="font-sans text-headline-md text-on-surface font-bold">{{ stat.value }}</span>
          <span class="font-mono text-label-mono text-on-surface-variant">{{ stat.label }}</span>
        </div>
      </div>

      <div class="flex flex-wrap gap-4">
        <a
          href="#projects"
          class="inline-flex items-center gap-2 font-mono text-label-mono bg-secondary-container text-on-secondary-container px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          View Work
          <span class="material-symbols-outlined text-[18px]">arrow_downward</span>
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 font-mono text-label-mono bg-transparent border border-outline-variant text-on-surface hover:bg-secondary-container/10 px-8 py-3 rounded transition-colors"
        >
          Connect
        </a>
      </div>
    </section>

    <!-- ── PROJECTS ── -->
    <section id="projects" class="py-24 border-t border-outline-variant">
      <div class="mb-12">
        <p class="font-mono text-label-mono text-primary uppercase tracking-wider mb-3">Projects</p>
        <h2 class="font-sans text-headline-lg text-on-surface">Backend Systems</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <article
          v-for="project in projects"
          :key="project.name"
          class="bg-surface-container border border-outline-variant rounded-lg p-6 flex flex-col h-full glow-hover transition-all duration-300 group"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="bg-primary/10 text-primary p-2 rounded">
              <span class="material-symbols-outlined">{{ project.icon }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-secondary glow-blue" />
              <span class="font-sans text-caption text-secondary">Live</span>
            </div>
          </div>
          <h3 class="font-sans text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
            {{ project.name }}
          </h3>
          <p class="font-sans text-body-md text-on-surface-variant mb-6 flex-grow">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="font-mono text-label-mono bg-surface-variant text-on-surface px-2 py-1 rounded"
            >
              {{ tech }}
            </span>
          </div>
          <div class="mt-auto border-t border-outline-variant pt-4 flex justify-end">
            <a
              :href="project.repo"
              target="_blank"
              rel="noopener"
              class="font-mono text-label-mono text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              GitHub
              <span class="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- ── EXPERIENCE ── -->
    <section id="experience" class="py-24 border-t border-outline-variant">
      <div class="mb-12">
        <p class="font-mono text-label-mono text-primary uppercase tracking-wider mb-3">Experience</p>
        <h2 class="font-sans text-headline-lg text-on-surface">Background</h2>
      </div>

      <div class="space-y-8 mb-16">
        <div
          v-for="job in experience"
          :key="job.title"
          class="flex flex-col md:flex-row gap-6"
        >
          <div class="md:w-1/4 pt-1 shrink-0">
            <p class="font-mono text-label-mono text-on-surface-variant">{{ job.period }}</p>
          </div>
          <div class="md:w-3/4 bg-surface-container p-6 rounded-lg border border-outline-variant glow-hover transition-all">
            <h3 class="font-sans text-headline-md text-on-surface mb-1">{{ job.title }}</h3>
            <p class="font-mono text-label-mono text-secondary mb-4">{{ job.company }}</p>
            <ul class="space-y-3">
              <li
                v-for="point in job.points"
                :key="point"
                class="font-sans text-body-md text-on-surface-variant flex items-start gap-2"
              >
                <span class="text-primary mt-1 shrink-0">›</span>
                {{ point }}
              </li>
            </ul>
            <div v-if="job.metric" class="mt-5 bg-[#020617] p-4 rounded-lg font-mono text-label-mono text-on-surface-variant border border-outline-variant overflow-x-auto">
              <code v-html="job.metric" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-6">Technical Stack</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="category in techStack"
            :key="category.label"
            class="bg-surface-container-low p-6 border border-outline-variant rounded-lg"
          >
            <h3 class="font-mono text-label-mono text-primary mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">{{ category.icon }}</span>
              {{ category.label }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in category.items"
                :key="tech"
                class="bg-surface-variant text-on-surface font-mono text-label-mono px-3 py-1 rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CONTACT ── -->
    <section id="contact" class="py-24 border-t border-outline-variant pb-32">
      <div class="mb-12">
        <p class="font-mono text-label-mono text-primary uppercase tracking-wider mb-3">Contact</p>
        <h2 class="font-sans text-headline-lg text-on-surface">Get in Touch</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <!-- Form -->
        <div class="lg:col-span-7 bg-surface-container rounded-xl border border-outline-variant p-6 md:p-10">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block font-mono text-label-mono text-on-surface-variant mb-2">
                  Name <span class="text-error">*</span>
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
                  Email <span class="text-error">*</span>
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
                Message <span class="text-error">*</span>
              </label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Enter your message here..."
                required
                class="w-full bg-background border border-outline-variant text-on-surface font-sans text-body-md rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors px-4 py-3 resize-y placeholder:text-outline"
              />
            </div>
            <div class="flex items-center justify-between flex-wrap gap-4">
              <p class="font-sans text-caption text-on-surface-variant hidden md:block">
                I typically respond within 24 hours.
              </p>
              <button
                type="submit"
                :disabled="submitting"
                class="w-full md:w-auto inline-flex justify-center items-center gap-2 font-mono text-label-mono bg-primary text-on-primary px-8 py-3 rounded hover:bg-primary-fixed transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ submitting ? 'Sending...' : 'Send Message' }}
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

        <!-- Sidebar -->
        <div class="lg:col-span-5 flex flex-col gap-gutter">
          <div class="bg-surface-container rounded-xl border border-outline-variant p-6 flex flex-col gap-4">
            <h3 class="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider">Status</h3>
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

          <div class="bg-surface-container rounded-xl border border-outline-variant p-6 flex-grow">
            <h3 class="font-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-6">Links</h3>
            <div class="space-y-4">
              <a
                v-for="link in externalLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
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
                <span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const stats = [
  { value: '281+', label: 'LeetCode · Top 13%' },
  { value: '5', label: 'Projects deployed' },
  { value: '3×', label: 'Hackathon finalist' },
]

const projects = [
  {
    name: 'Database Backup CLI',
    description: 'Production-grade automation CLI for async database backups — stream-based pipeline handles 50GB migrations under 150MB memory with 99.9% success rate.',
    stack: ['TypeScript', 'MySQL', 'Node.js', 'Bash'],
    icon: 'terminal',
    repo: 'https://github.com/azammustafa66/database-backup-cli-client',
  },
  {
    name: 'Basecamp Clone API',
    description: 'Scalable REST backend with 25+ endpoints, granular RBAC, Redis caching under 120ms, and BullMQ async notification pipelines boosting throughput by 40%.',
    stack: ['Express', 'MongoDB', 'Redis', 'Docker', 'BullMQ', 'JWT'],
    icon: 'hub',
    repo: 'https://github.com/azammustafa66/basecamp-clone-backend',
  },
  {
    name: 'Image Processing Service',
    description: 'Distributed image processing and delivery service with dynamic transformations — reduces average payload by 40% while maintaining visual quality under concurrent load.',
    stack: ['Bun', 'Node.js', 'Express', 'MongoDB', 'Sharp'],
    icon: 'image',
    repo: 'https://github.com/azammustafa66/image-processing-backend',
  },
  {
    name: 'Event Booking API',
    description: 'Role-gated REST API for event booking — organizers manage events, customers book tickets. Async notification side-effects via BullMQ keep HTTP responses non-blocking.',
    stack: ['Bun', 'Express', 'TypeScript', 'MongoDB', 'BullMQ', 'Redis', 'JWT'],
    icon: 'calendar_month',
    repo: 'https://github.com/azammustafa66/event-booking-app-backend',
  },
  {
    name: 'HTTP Caching Proxy',
    description: 'CLI-driven HTTP proxy that caches GET responses to disk. Serves repeat requests from cache without hitting the origin. Returns X-Cache: HIT/MISS/BYPASS on every response.',
    stack: ['TypeScript', 'Node.js'],
    icon: 'speed',
    repo: 'https://github.com/azammustafa66/http-caching-proxy-server',
  },
]

const techStack = [
  {
    label: 'Languages & Frameworks',
    icon: 'data_object',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'Bun'],
  },
  {
    label: 'Databases & Messaging',
    icon: 'database',
    items: ['MongoDB', 'MySQL', 'Redis', 'RabbitMQ', 'BullMQ'],
  },
  {
    label: 'DevOps & Testing',
    icon: 'dns',
    items: ['Docker', 'Linux', 'CI/CD', 'Selenium', 'Playwright', 'Cypress', 'Jira'],
  },
]

const experience = [
  {
    title: 'Software Engineer',
    company: 'IBM · Bangalore, India',
    period: 'Dec 2025 — Present',
    points: [
      'Executed functional testing for SAP SuccessFactors cloud integrations, identifying and resolving 30+ critical defects that prevented production rollbacks and improved release stability by 15%.',
      'Improved defect lifecycle management by introducing standardized Jira workflows and facilitating daily cross-team syncs, reducing average bug resolution time by 20% across 4 deployment cycles.',
      'Authored 45+ Java Selenium automated test scripts, reducing regression testing time by 30% and manual effort; additionally contributed test cases and best practices to Playwright and Cypress automation projects.',
    ],
    metric: '// IBM · SAP SuccessFactors integrations<br/>defects_resolved:    30+<br/>release_stability:   +15%<br/>bug_resolution_time: -20%<br/>test_scripts:        45+<br/>regression_time:     -30%',
  },
  {
    title: 'B.E. Computer Science & Engineering',
    company: 'Visvesvaraya Technological University · Belgavi, India',
    period: 'Sept 2021 — June 2025',
    points: [
      'CGPA: 7.28 / 10.',
      'Core coursework: Operating Systems, Computer Networks, OOP, DBMS, Data Structures & Algorithms, Software Engineering.',
      '3× Hackathon Finalist (1 Regional, 2 University-level) — recognized for rapid prototyping and scalable backend design.',
    ],
    metric: null,
  },
]

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
  { label: 'Resume', desc: 'View / Download PDF', icon: 'download', href: 'https://drive.google.com/file/d/1AGrrc0bRow8DGKcmTpyTLhmWPcrLSh0e/view?usp=share_link' },
  { label: 'Email', desc: 'azammustafa66@gmail.com', icon: 'mail', href: 'mailto:azammustafa66@gmail.com' },
  { label: 'GitHub', desc: 'Review code repositories', icon: 'code', href: 'https://github.com/azammustafa66' },
  { label: 'LinkedIn', desc: 'Professional history', icon: 'work', href: 'https://www.linkedin.com/in/azam20/' },
  { label: 'LeetCode', desc: '281+ problems · Top 13%', icon: 'psychology', href: 'https://leetcode.com/u/azammustafa/' },
]
</script>
