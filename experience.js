// experience javascript
//basic page js

//link variables
const github_button = document.getElementById('github-btn');
const linkedin_button = document.getElementById('linkedin-btn');
const email_button = document.getElementById('email-btn');
const link_copied_github = document.getElementById('copy-message-github');
const link_copied_linkedin = document.getElementById('copy-message-linkedin');
const link_copied_email = document.getElementById('copy-message-email');
//page variables
const projects_page = document.getElementById('projects-btn');
const aboutme_page = document.getElementById('misc-btn');

github_button.addEventListener('click', async () => {
    const githubLink = "https://github.com/camicasa";

    try {
        await navigator.clipboard.writeText(githubLink);
        link_copied_github.classList.add('show');
        setTimeout(() => {
            link_copied_github.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
})
linkedin_button.addEventListener('click', async () => {
    const linkedInLink = "www.linkedin.com/in/camilla-casado-072348256";

    try {
        await navigator.clipboard.writeText(linkedInLink);
        link_copied_linkedin.classList.add('show');
        setTimeout(() => {
            link_copied_linkedin.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
})

email_button.addEventListener('click', async () => {
    const emailLink = "camicasa@umich.edu";

    try {
        await navigator.clipboard.writeText(emailLink);
        link_copied_email.classList.add('show');
        setTimeout(() => {
            link_copied_email.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
})

projects_page.addEventListener('click', () => {
  window.location.href = 'projects.html';
});
aboutme_page.addEventListener('click', () => {
  window.location.href = 'main_page.html';
});