<template>
  <div class="px-5 md:px-margin-desktop max-w-container mx-auto w-full pb-section-gap">
    <!-- Header -->
    <header class="mt-8 md:mt-16 mb-16 md:mb-24">
      <h1 class="font-sans text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">
        Building the foundation.
      </h1>
      <p class="font-sans text-body-lg text-on-surface-variant max-w-2xl">
        Software Engineer at IBM with a strong foundation in distributed systems, cloud integrations,
        and backend architecture. I write code that is intentional, testable, and built to last.
      </p>
    </header>

    <!-- About bento -->
    <section class="grid grid-cols-1 md:grid-cols-12 gap-unit mb-section-gap">
      <div class="col-span-1 md:col-span-8 bg-surface-container p-8 rounded-lg border border-outline-variant glow-hover transition-all">
        <h2 class="font-sans text-headline-md text-on-surface mb-4">About Me</h2>
        <div class="space-y-4 font-sans text-body-md text-on-surface-variant">
          <p>
            I'm Azam Mustufa Didagur — a Software Engineer at IBM working on SAP SuccessFactors cloud integrations,
            focused on quality engineering, test automation, and defect lifecycle management.
          </p>
          <p>
            My core philosophy: code is infrastructure. Every line should be intentional, maintainable,
            and verifiable. I thrive in environments where performance is critical and correctness is non-negotiable.
            3× hackathon finalist, LeetCode global top 13%.
          </p>
        </div>
      </div>
      <div class="col-span-1 md:col-span-4 bg-surface-container p-8 rounded-lg border border-outline-variant glow-hover transition-all flex flex-col justify-center gap-3">
        <div>
          <p class="font-mono text-label-mono text-on-surface-variant mb-1">Current Role</p>
          <p class="font-sans text-body-md text-on-surface font-semibold">Software Engineer</p>
          <p class="font-mono text-label-mono text-secondary">@ IBM · Bangalore</p>
        </div>
        <div class="pt-3 border-t border-outline-variant">
          <p class="font-mono text-label-mono text-on-surface-variant mb-1">Education</p>
          <p class="font-sans text-body-md text-on-surface font-semibold">B.E. Computer Science</p>
          <p class="font-mono text-label-mono text-secondary">VTU · 7.28 CGPA</p>
        </div>
      </div>
    </section>

    <!-- Technical Stack -->
    <section class="mb-section-gap">
      <h2 class="font-sans text-headline-lg text-on-surface mb-8 border-b border-outline-variant pb-4">
        Technical Stack
      </h2>
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
    </section>

    <!-- Experience timeline -->
    <section>
      <h2 class="font-sans text-headline-lg text-on-surface mb-12 border-b border-outline-variant pb-4">
        Experience
      </h2>
      <div class="space-y-12">
        <div
          v-for="job in experience"
          :key="job.title"
          class="flex flex-col md:flex-row gap-6"
        >
          <div class="md:w-1/4 pt-1">
            <p class="font-mono text-label-mono text-on-surface-variant">{{ job.period }}</p>
          </div>
          <div class="md:w-3/4 bg-surface-container p-6 rounded-lg border border-outline-variant glow-hover transition-all">
            <h3 class="font-sans text-headline-md text-on-surface mb-1">{{ job.title }}</h3>
            <p class="font-mono text-label-mono text-secondary mb-4">{{ job.company }}</p>
            <ul class="space-y-2">
              <li
                v-for="point in job.points"
                :key="point"
                class="font-sans text-body-md text-on-surface-variant flex items-start gap-2"
              >
                <span class="text-primary mt-1 shrink-0">›</span>
                {{ point }}
              </li>
            </ul>
            <!-- Code snippet for IBM role -->
            <div v-if="job.metric" class="mt-4 bg-[#020617] p-4 rounded-lg font-mono text-label-mono text-on-surface-variant border border-outline-variant overflow-x-auto">
              <code v-html="job.metric" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
</script>
