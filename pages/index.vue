<template>
  	<main v-if="!loading" id="hello">

    	<!-- gradients -->
    	<div class="css-blurry-gradient-blue"></div>
    	<div class="css-blurry-gradient-green"></div>

		<section class="hero">
		
			<div class="head">
        <span> Hi all, I am </span>
        <h1>{{ config.name }}</h1>
        <span class="diple flex">
          >&nbsp;
          <h2 class="line-1 anim-typewriter max-w-fit">{{ currentRole }}</h2>
        </span>
      </div>

			<div id="info">
				<span class="action">
					// I am a Front-end Developer, UI/UX Designer, and AI Enthusiast with expertise in AI, Web Development, and Cloud Computing. I build intuitive, scalable, and AI-driven applications that solve real-world problems.
				</span>
				<span :class="{hide: isMobile}">
					// I thrive on innovation, blending AI and Web Technologies to create impactful digital experiences. Let’s connect! 🚀

				</span>
				<span :class="{hide: !isMobile}">
					// You can checkout my resume:
				</span>
				<p class="code">
					<span class="identifier">
						const
					</span>
					<span class="variable-name">
            _Resume-URL
					</span>
					<span class="operator">
						=
					</span>
					<a class="string" :href="'https://drive.google.com/file/d/19yXKJEpYX3md_lsfo_cJFEsGNAQdWIXB/view'">
						"https://drive.google.com/file/d/19yXKJEpYX3md_lsfo_cJFEsGNAQdWIXB/view"
					</a>
				</p>
			</div>
		</section>

		<section data-aos="fade-up" class="game" v-if="!isMobile">
			<SnakeGame />
		</section>

	</main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DevConfig from '~/developer.json';

const config = ref(DevConfig);
const roles = ref(DevConfig.roles);
const currentRole = ref(roles.value[0]);
const isMobile = ref(false);
const loading = ref(false);
let roleIndex = 0;
let roleInterval;

onMounted(() => {
  if (window.innerWidth <= 1024) isMobile.value = true;
  window.addEventListener('resize', handleResize);
  startRoleTypingEffect();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  clearInterval(roleInterval);
});

function handleResize() {
  isMobile.value = window.innerWidth <= 1024;
}

function startRoleTypingEffect() {
  roleInterval = setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.value.length;
    currentRole.value = ""; // Clear text before typing new role

    let roleText = roles.value[roleIndex];
    let charIndex = 0;

    const typingEffect = setInterval(() => {
      if (charIndex < roleText.length) {
        currentRole.value += roleText[charIndex];
        charIndex++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100); // Adjust speed of typing (100ms per character)
  }, 3000); // Delay before changing role (4s)
}
</script>

<style scoped>
#hello {
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1 1 auto;
  padding-left: 275px;
  overflow: hidden;
}
.hero {
	width: 100%;
	justify-content: center;
	
}
.game {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
/* 	align-items: center; */
	z-index: 20;
}

#hello .hero {
	display: flex;
	flex-direction: column;
	/* display: grid;
	grid-template-columns: repeat(12, minmax(0, 1fr)); */
	margin: 0rem;
}


#hello .head span {
  font-size: 18px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Retina';
}

#hello .head h1 {
  font-size: 58px;
  line-height: 1;
  color: #E5E9F0;
  font-family: 'Fira Code Regular';
  padding-top: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
}

#hello .head h2, #hello .head .diple {
  font-size: 32px;
  line-height: 1;
  color: #4D5BCE;
  font-family: 'Fira Code Retina';
}

.head {
  padding-bottom: 3rem;
}

#info {
	display: flex;
	flex-direction: column;
}

#info > span {
  font-size: 14px;
  line-height: 1;
  color: #8da9c6;
  font-family: 'Fira Code Retina';
  padding-bottom: 1rem; /* 16px */
}

.code {
  font-family: 'Fira Code Medium';
  color: #E5E9F0;
}

.code .identifier {
  color: #6172ff;
}

.code .variable-name {
  color: #43D9AD;
}

.code .operator {
  color: white;
}

.code .string {
  color: #E99287;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

#info {
	padding-block: 2.5rem;
}

#info .action {
	display: flex
}

.hide {
  display: none;
}

.css-blurry-gradient-blue {
  position: fixed;
  bottom: 25%;
  right: 5%;
  width: 300px;
  height: 300px;
	border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(77, 91, 206, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
}

.css-blurry-gradient-green {
  position: absolute;
  top: 20%;
  right: 30%;
  width: 300px;
  height: 300px;
	border-radius: 0% 50% 0% 50%;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
}

#info {
  font-size: 14px;
}

/* Typewrite Animation */

.line-1 {
    width: fit-content;
    border-right: 3px solid rgba(255,255,255,.75);
    white-space: nowrap;
    overflow: hidden;
    padding-right: 2px;
}

.anim-typewriter{
    animation: typewriter 3.5s steps(40) 1s 1 normal both,
    blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 100%;}
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}


/* mobile */
@media (max-width: 768px) {

	#hello {
		padding-left: 0;
	}

	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1.75rem; /* 28px */
	}
	.head {
		padding-top: 4rem; /* 40px */
	}

	#hello .head h2, #hello .head .diple {
		font-size: 20px;
		color: #43D9AD;
	}
	
	#info .action {
		display: none;
	}

}

/* tablet */
@media (min-width: 768px) and (max-width: 1024px) {
	#hello {
		padding-left: 0;
	}
	#hello .hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 1.75rem; /* 28px */
	}
	.head {
		padding-top: 4rem; /* 40px */
	}

}

@media (min-width: 1024px) and (max-width: 1320px) {
	#hello {
		padding-left: 135px;
	}
}


/* LG */

@media (min-width: 1024px) {

  .css-blurry-gradient-blue {
    position: fixed;
    bottom: 10%;
    right: 10%;
    width: 500px;
    height: 500px;
    opacity: 0.7;
    border-radius: 100% 50% 100% 0%;
  }

  .css-blurry-gradient-green {
    position: fixed;
    top: 10%;
    right: 35%;
    filter: blur(100px);
    rotate: 10deg;
    width: 400px;
    height: 400px;
    opacity: 0.5;
    border-radius: 100% 0% 0% 0%;
    rotate: 20deg;
  }
}

@media (min-width: 1920px){
	#hello {
		padding-left: 310px;
	}
	#hello .head h1 {
		font-size: 62px;
	}
}

/* Typewriter Effect */
.line-1 {
  width: fit-content;
  border-right: 3px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  padding-right: 2px;
}

.anim-typewriter {
  animation: blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}

</style>
