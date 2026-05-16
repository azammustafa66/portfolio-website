<template>
  <div class="px-5 md:px-margin-desktop max-w-container mx-auto w-full pb-section-gap">
    <!-- Header -->
    <div class="mb-16 md:mb-24 mt-8 md:mt-16">
      <h1 class="font-sans text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">
        Distributed Systems &amp; Architecture
      </h1>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-3xl">
        Production-grade backend services focused on scalability, fault tolerance, and clean API design.
      </p>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
      <article
        v-for="project in projects"
        :key="project.name"
        class="bg-surface-container border border-outline-variant rounded-lg p-6 flex flex-col h-full glow-hover transition-all duration-300 group"
      >
        <!-- Card top -->
        <div class="flex justify-between items-start mb-4">
          <div class="bg-primary/10 text-primary p-2 rounded">
            <span class="material-symbols-outlined">{{ project.icon }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" :class="project.status === 'deployed' ? 'bg-secondary glow-blue' : 'bg-surface-variant'" />
            <span class="font-sans text-caption" :class="project.status === 'deployed' ? 'text-secondary' : 'text-on-surface-variant'">
              {{ project.status === 'deployed' ? 'Live' : 'Archived' }}
            </span>
          </div>
        </div>

        <!-- Title + description -->
        <h3 class="font-sans text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
          {{ project.name }}
        </h3>
        <p class="font-sans text-body-md text-on-surface-variant mb-6 flex-grow">
          {{ project.description }}
        </p>

        <!-- Tech chips -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="font-mono text-label-mono bg-surface-variant text-on-surface px-2 py-1 rounded"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Footer -->
        <div class="mt-auto border-t border-outline-variant pt-4 flex justify-end items-center">
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
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'Database Backup CLI',
    description: 'Production-grade automation CLI for async database backups — stream-based pipeline handles 50GB migrations under 150MB memory with 99.9% success rate.',
    stack: ['TypeScript', 'MySQL', 'Node.js', 'Bash'],
    status: 'deployed',
    icon: 'terminal',
    repo: 'https://github.com/azammustafa66/database-backup-cli-client',
  },
  {
    name: 'Basecamp Clone API',
    description: 'Scalable REST backend with 25+ endpoints, granular RBAC, Redis caching under 120ms, and BullMQ async notification pipelines boosting throughput by 40%.',
    stack: ['Express', 'MongoDB', 'Redis', 'Docker', 'BullMQ', 'JWT'],
    status: 'deployed',
    icon: 'hub',
    repo: 'https://github.com/azammustafa66/basecamp-clone-backend',
  },
  {
    name: 'Image Processing Service',
    description: 'Distributed image processing and delivery service with dynamic transformations — reduces average payload by 40% while maintaining visual quality under concurrent load.',
    stack: ['Bun', 'Node.js', 'Express', 'MongoDB', 'Sharp'],
    status: 'deployed',
    icon: 'image',
    repo: 'https://github.com/azammustafa66/image-processing-backend',
  },
  {
    name: 'Event Booking API',
    description: 'Role-gated REST API for event booking — organizers manage events, customers book tickets. Async notification side-effects via BullMQ keep HTTP responses non-blocking.',
    stack: ['Bun', 'Express', 'TypeScript', 'MongoDB', 'BullMQ', 'Redis', 'JWT'],
    status: 'deployed',
    icon: 'calendar_month',
    repo: 'https://github.com/azammustafa66/event-booking-app-backend',
  },
  {
    name: 'HTTP Caching Proxy',
    description: 'CLI-driven HTTP proxy that caches GET responses to disk. Serves repeat requests from cache without hitting the origin. Returns X-Cache: HIT/MISS/BYPASS on every response.',
    stack: ['TypeScript', 'Node.js'],
    status: 'deployed',
    icon: 'speed',
    repo: 'https://github.com/azammustafa66/http-caching-proxy-server',
  },
]
</script>
