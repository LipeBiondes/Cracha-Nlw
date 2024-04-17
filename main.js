//cameCase, PascalCase, snake_case//

const LinksSocialMedia = {
  github: 'LipeBiondes',
  youtube: 'channel/UC3wB4c8dfhtVOPY1ujut_fA',
  facebook: 'alefe.felipe.336',
  instagram: 'lipe_biondes',
  twitter: 'Lipe_pereira'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLoginGit.textContent = data.login
    })
}

getGitHubProfileInfos()
