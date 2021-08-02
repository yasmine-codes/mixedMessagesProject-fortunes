Script

// This is a fortune-telling generator. This script will choose a random element from three separate arrays to generate fortune messages.

const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
  }

  const messages = {
    fortune: ['You will prosper this year', 'Skill comes from diligence', 'Love is around the corner', 'The current year will bring your happiness', 'Your imagination is a great asset'], 
    zodiac: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'saigitarius', 'capricorn', 'pisces', 'aquarius'],
    month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
}

// Using the items from the sets, this will iterate over the object and create a string containing randomised fortune messages.

let generateMessages = []
{let options = generateRandomNumber(messages[prop].length)
switch(prop) {
    case 'fortune':
        generateMessages.push(`Your fortune is: "${messages[prop][options]}".`)
        break
    case 'zodiac':
        generateMessages.push(`You will be most compatible with a: "${messages[prop][options]}".`)
        break
    case 'month':
        generateMessages.push(`Your lucky month is: "${messages[prop][options]}".`)
    break
    default:
        generateMessages.push(`Sorry, but there is an error.`)
  }
}
function formatMessages(fortuneTeller) {
    const formatted = generateMessages.join('\n')
    console.log(formatted)
  }
  
  formatMessages(generateMessages);


