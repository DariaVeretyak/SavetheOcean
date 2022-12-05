const news = {
  1: {
    'name': 'WHAT IS GYM?',
    'content': 'The Global Youth MentorProgram gives motivated Youth Leaders the tools and support to create lasting systemic change in their communities.',
    'img': 'https://s3-alpha-sig.figma.com/img/ebd8/ad73/92d1aece45b2b16ab4b752b208e0c2e1?Expires=1670803200&Signature=EM2gbnNYuJx9B85hEmOBC9FOBgvJADd1gRYL0eFGY0OaFKIr7VFVhipe2nFrI983T1MNQmiyuhPslTLKM3G7kVkViP6qSyhk6RY0QWpQHWqB4HVtHZrZoftNYft1GqWvNZ~b0m17SedIg2D9iIgbjpRcAUkT7OHX-LYn4iWZwxdZpwDCpHqGYe8udMDNQ5er~4gBlaJAcUGBUPQSjHCrlaeaXyOIPCg3HY~zewYfdtH-7o5Bb9tYN14u3UbiopxyVtu79kcRMXU2EAcqZmQZ-OdgdSlQbMxaJ~BrRhe96BAAUiT6lU0HXAVMMfdeO16L3a5BEKF2PHJZUBrgwfrm0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  2: {
    'name': 'Here is the result of our last project in africa',
    'content': 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) ',
    'img': 'https://s3-alpha-sig.figma.com/img/49c4/0791/fb44e9a6ddcc758b967cbb9626b970a6?Expires=1670803200&Signature=bckP3-q6PnaWhy-l1hlm0WXgGOBA1vdwMfUFWVKXC95UcYwNMdZhMJysPpLn9USPEk9Sefx5CHr4m3ZSum~iasG0y9Z1RgMVa5yu2JkPfNXS0lO5W0y9LXP0lkREBHc8MQVfiW34ajsIaLqnFN9-VAMqK8-5IaGbN6E2NY7bszw4TYrgsPOJmAMC~ks7W~D8WUn~IHAEkTuZs2nxBMi-1orEm5SFE-eMhYmOaXg3ZSUOoR0ONQqa7gtcDoRs8chYHXY1BsDgKu0odxkmx3rNPbR2ZjkwxwO0sNBS59W1nl4uw7WATtfVsWcqgdWHIbG36Lb5mK0y2Li-hZHunfUsug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  3: {
    'name': 'Time to change something. There is no time left',
    'content': "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't.",
    'img': 'https://s3-alpha-sig.figma.com/img/315b/c04d/9cbff2f485504cf6cc238529c5637539?Expires=1670803200&Signature=CTS0kVizgsKIKob5U2kuysKV3P8jTst-1S0DkezoTsx8-72PrOR97QQ35C~uW~KQsTxeUmesAATrDOWu1ivUa9dDFN5rRp~CTc05MRXedsVY92pCxlWBi0wFncCNmipCOb0vHuO9L~c-puRDtP6mWUNkrtpjEW3moQHUySAfVJxCA7oDH0W6OxI4DLkqGcfRg~bhbpa-0BGVEKkKpCk7IFoLH1oSA3q3~Xeiw3vUYM8IIryKI3hZ76M3FWHdZtkJVyMRaa1zlyJ0n~o9xPEPW9I~T5GbtDMgk660QgdsSgsJOHATipDkhS2JQumRwSHblNbLp~-02tfIr-6nxY~cqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  4: {
    'name': 'How can we change the situation with the global warming cleaning the ocean?',
    'content': 'The purpose of lorem ipsum is to create a natural looking block of text sentence.',
    'img': 'https://s3-alpha-sig.figma.com/img/9c5b/7d96/32903a5bc92f77092d0f701046e37d19?Expires=1670803200&Signature=AiJvx7JfXX6jHgsqHdQ-Yjgm4IetWgulco4gGuTNZaQN9bwGovLr4lEr6lM~f17drIprtObIdk4OHvg3n11J~Erlpsa6gDqlHrEmAY1CHoIOVD8t0SLgKoDudSWz7tX-U8d5vo4zizbt~DM05rBPuz33fwZ1Rn6ymiNq-Lb5aprMd3PdkfiCP9022Cjs9Vam5bxHeDLzH3H5H3FREAZMJnvQRZf-skIjc7OVobu3zwFSqJXOQi8Fo7G0CjOJhIS0MY6aWo1jA~~k~uV23eyfEGZdjY0tpSsIK4josYCGo05abjKlyB348rxTCZn0AvwhUEvQxQIZOwqM5y0gYTtEKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
};

const newsBlock = document.querySelector('.news__content');

for (const key in news) {
  newsBlock.insertAdjacentHTML('beforeend', `
    <div class="news__newBlock">
      <img class="news__imgBlock" src="${news[key].img}"/>
      <div class="news__info">
        <p class="news__titleBlock">${news[key].name}</p>
        <p class="news__contentBlock">${news[key].content}</p>
      </div>
    </div>
  `);
}
