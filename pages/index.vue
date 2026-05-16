<template>
  <div class="px-5 md:px-margin-desktop max-w-container mx-auto w-full pb-section-gap">

    <!-- Hero -->
    <section class="flex flex-col gap-8 max-w-3xl mt-16 md:mt-24 mb-section-gap">
      <!-- Status pill -->
      <div class="inline-flex items-center gap-2 bg-surface-container border border-outline-variant px-3 py-1 rounded-full w-fit">
        <span class="w-2 h-2 rounded-full bg-secondary-container glow-blue" />
        <span class="font-mono text-label-mono text-on-surface-variant">System Operational · IBM, Bangalore</span>
      </div>

      <h1 class="font-sans text-headline-xl-mobile md:text-headline-xl text-on-surface leading-tight">
        Building Robust<br />Backend Systems
      </h1>

      <p class="font-sans text-body-lg text-on-surface-variant max-w-2xl">
        Software Engineer at IBM specializing in distributed systems, cloud integrations, and high-concurrency API design.
        I build scalable, fault-tolerant infrastructure — from microservices to async pipelines — that performs under real load.
      </p>

      <div class="flex flex-wrap gap-4 mt-2">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 font-mono text-label-mono bg-secondary-container text-on-secondary-container px-8 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Connect
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 font-mono text-label-mono bg-transparent border border-outline-variant text-on-surface hover:bg-secondary-container/10 px-8 py-3 rounded transition-colors"
        >
          View Work
        </NuxtLink>
      </div>
    </section>

    <!-- Bento grid -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <!-- Code block card -->
      <div class="md:col-span-8 bg-[#020617] border border-outline-variant rounded-xl p-8 glow-hover transition-all duration-300">
        <div class="flex items-center gap-2 mb-6 border-b border-outline-variant/50 pb-4">
          <span class="w-3 h-3 rounded-full bg-surface-variant" />
          <span class="w-3 h-3 rounded-full bg-surface-variant" />
          <span class="w-3 h-3 rounded-full bg-surface-variant" />
          <span class="ml-4 font-mono text-caption text-on-surface-variant">server.ts</span>
        </div>
        <pre class="font-mono text-label-mono text-on-surface overflow-x-auto leading-relaxed"><code><span class="text-tertiary">import</span> { createServer } <span class="text-tertiary">from</span> <span class="text-secondary">'@system/core'</span>;
<span class="text-tertiary">import</span> { DatabasePool } <span class="text-tertiary">from</span> <span class="text-secondary">'@system/db'</span>;

<span class="text-tertiary">const</span> server = <span class="text-primary">createServer</span>({
  concurrency: <span class="text-secondary-fixed-dim">1024</span>,
  timeout:     <span class="text-secondary-fixed-dim">5000</span>,
  regions:     [<span class="text-secondary">'us-east-1'</span>, <span class="text-secondary">'ap-south-1'</span>],
});

server.<span class="text-secondary-container" style="color:#adc6ff">onReady</span>(() =&gt; {
  <span class="text-on-surface-variant">// Architecture initialized</span>
  server.<span class="text-secondary-container" style="color:#adc6ff">listen</span>(<span class="text-secondary-fixed-dim">8080</span>);
  <span class="text-primary" style="color:#bec6e0">console</span>.<span class="text-secondary-container" style="color:#adc6ff">log</span>(<span class="text-secondary">'Ready to route traffic.'</span>);
});</code></pre>
      </div>

      <!-- Core stack card -->
      <div class="md:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-8 flex flex-col justify-between glow-hover transition-all duration-300">
        <div>
          <h3 class="font-sans text-headline-md text-on-surface mb-2">Core Stack</h3>
          <p class="font-sans text-body-md text-on-surface-variant mb-6">Optimized tools for reliable performance.</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in coreStack" :key="tech" class="bg-surface-variant text-on-surface border border-outline-variant/50 px-3 py-1 rounded font-mono text-label-mono">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Stats row -->
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="md:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-6 glow-hover transition-all duration-300"
      >
        <p class="font-mono text-label-mono text-on-surface-variant mb-2 uppercase tracking-wider">{{ stat.label }}</p>
        <p class="font-sans text-headline-lg text-on-surface mb-1">{{ stat.value }}</p>
        <p class="font-sans text-body-md text-on-surface-variant">{{ stat.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const coreStack = ['Java', 'Node.js', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'Selenium']

const stats = [
  { label: 'LeetCode', value: '281+', desc: 'Problems solved · Global top 13%' },
  { label: 'Projects Deployed', value: '5', desc: 'Production-grade backend systems' },
  { label: 'Hackathons', value: '3×', desc: 'Finalist — 1 Regional, 2 University' },
]
</script>
