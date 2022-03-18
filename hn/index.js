const baseUrl = `https://hacker-news.firebaseio.com/v0`;

const apiGet = (path) => api('GET', baseUrl + path);

// Helper function to make API calls
async function api(method, url, body) {
  // console.log("API", method, url, `body len=${body?.length}`);
  const { http } = M.nodes;
  const json = await http.resource({ method, url, headers: "{}", }).$query(`{ body }`);
  return JSON.parse(json.body)
}

export const Root = {
  items() { return {}; },
  users() { return {}; },
}

export const ItemCollection = {
  async one({ args }) {
    // return apiGet(`/item/${args.id}.json`)
    if (args.id == 8863) {
      return {
        "title": "My YC app: Dropbox - Throw away your USB drive",
        "type": "story",
        "time": 1175714200,
        "kids": [8864, 8865, 8866, 8867]
      }
    } else if (args.id == 8864) {
      return {
        "text": "I have a few qualms with this app",
        "type": "comment",
        "time": 1175714201,
      }
    } else if (args.id == 8865) {
      return {
        "text": "This is genius.",
        "type": "comment",
        "time": 1175714202,
      }
    } else if (args.id == 8866) {
      return {
        "text": "The only problem is that you have to install something",
        "type": "comment",
        "time": 1175714203,
      }
    } else if (args.id == 8867) {
      return {
        "text": "How are you going to scale up your storage",
        "type": "comment",
        "time": 1175714204,
      }
    } else if (args.id == 28841629) {
      return {
        "by": "juancampa",
        "id": 28841629,
        "parent": 28840829,
        "text": "it&#x27;s not _actual_ lava you know? Probably not significant",
        "time": 1634055925,
        "type": "comment"
      }
    } else if (args.id == 28382215) {
      return {
        "by": "juancampa",
        "id": 28382215,
        "parent": 28378789,
        "text": "Broadly speaking, there are 3 types of media web: documents, interactive documents, applications. The Web is great for the first two and not so great for the last one.<p>The difference between interactive documents and applications is that users will reuse applications so they need to be snappy to leverage muscle memory. There should be no delay going to another screen, even if there&#x27;s a delay in updating the data in it (due to latency) and that&#x27;s where, IMO, there&#x27;s a huge opportunity for improvement.",
        "time": 1630514585,
        "type": "comment"
      }
    } else if (args.id == 28318926) {
      return {
        "by": "juancampa",
        "id": 28318926,
        "parent": 28318754,
        "text": "If you drop it, your floor won&#x27;t like it. My 2lb one is great though!",
        "time": 1630003758,
        "type": "comment"
      }
    } else if (args.id === 28297628) {
      return {
        "by": "juancampa",
        "id": 28297628,
        "kids": [28297781],
        "parent": 28297398,
        "text": "So basically passwords",
        "time": 1629860765,
        "type": "comment"
      }
    } else if (args.id === 28261115) {
      return {
        "by" : "juancampa",
        "id" : 28261115,
        "kids" : [ 28263555 ],
        "parent" : 28253818,
        "text" : "Now that I think about it, debugger and logging are orthogonal tools:<p><pre><code>  Debugger: show me everything at this point in time\n  Logging: show me this thing at every point in time</code></pre>",
        "time" : 1629584667,
        "type" : "comment"
      }
    } else if (args.id === 28840829) {
      return {
        "by": "mcdonje",
        "id": 28840829,
        "kids": [28841050, 28842227, 28844280, 28841568, 28841629],
        "parent": 28840710,
        "text": "That sounds like a non-trivial energy expenditure. Hopefully it&#x27;s part of their office heating plan.",
        "time": 1634052134,
        "type": "comment"
      }
    } else if (args.id === 28378789) {
      return {
        "by": "adriangrigore",
        "descendants": 71,
        "id": 28378789,
        "kids": [28379481, 28379398, 28379779, 28381292, 28379289, 28380972, 28379422, 28383822, 28379935, 28379122, 28379229, 28382215, 28381679, 28379418, 28393727, 28381262, 28380209, 28384799, 28381929, 28385115, 28380413, 28379673],
        "score": 100,
        "time": 1630498058,
        "title": "Documents ≠ Programs",
        "type": "story",
        "url": "https://mckinley.cc/blog/20210831.html"
      }
    } else if (args.id === 28318754) {
      return {
        "by": "defaulty",
        "descendants": 330,
        "id": 28318754,
        "kids": [28320334, 28319289, 28319865, 28319680, 28320824, 28319686, 28318988, 28323662, 28319050, 28319167, 28320065, 28319090, 28324400, 28321624, 28319190, 28321208, 28318941, 28319286, 28320241, 28321476, 28318901, 28319880, 28319902, 28325195, 28318968, 28323493, 28321387, 28319620, 28323379, 28318889, 28320170, 28319392, 28319228, 28320033, 28319797, 28320263, 28320167, 28321451, 28352023, 28319067, 28320110, 28319668, 28323572, 28319360, 28318926, 28320597, 28323172, 28329816, 28320684, 28319037, 28319312, 28324301, 28321024, 28319566, 28319193, 28318919, 28320259, 28322085, 28321733, 28323451, 28319287, 28324180, 28322662, 28320606, 28319721, 28319039, 28319576, 28319342, 28324622, 28318977, 28323316, 28319058, 28319326],
        "score": 288,
        "time": 1630002812,
        "title": "My Tungsten Cube (2019)",
        "type": "story",
        "url": "https://thume.ca/2019/03/03/my-tungsten-cube/"
      }
    } else if (args.id === 28297398) {
      return {
        "by": "zaroth",
        "id": 28297398,
        "kids": [28297628],
        "parent": 28296110,
        "text": "I’d rather store an HMAC of the token.<p>That way you’re hashing the user input, which sanitizes it. It also protects against timing attacks.*<p>And most importantly it protects against credentials leaking. Even insiders who can read a token from the database can’t use it to authenticate, because the app logic expects a pre-image of that value.<p>*HMAC resists timing attacks because the attacker can no longer control the bit pattern on either side of the equality check.",
        "time": 1629858078,
        "type": "comment"
      }
    } else if (args.id === 28253818) {
      return {
        "by": "mjrbrennan",
        "id": 28253818,
        "kids": [28261041, 28261115],
        "parent": 28251896,
        "text": "Yes all the time, debugger for JavaScript and binding.pry for ruby. I don’t understand how people can rely purely on print debugging. I find it much more useful to stop and inspect the state and input, and being able to print a backtrace from that point is also valuable.",
        "time": 1629515689,
        "type": "comment"
      }
    }
  },
}

export const Item = {
  async parent({ obj }) {
    if (obj.parent) {
      // return apiGet(`/item/${obj.parent}.json`)
      return ItemCollection.one({ args: { id: obj.parent }});
    }
  },
  async gref({ self, obj, generateSubquery }) {
    if (obj && typeof obj.id === "number") {
      return M.root.items.one({ id: obj.id });
    }
    return self;
  },
  async kids({ obj, generateSubquery }) {
    const subquery = generateSubquery();
    return obj.kids &&
      Promise.all(obj.kids.slice(0, 5).map((id) => apiGet(`/item/${id}.json`)))
  }
}

export const UserCollection = {
  async one({ args }) {
    //  return apiGet(`/user/${args.id}.json`)
    return {
      "about": "https:&#x2F;&#x2F;membrane.io\nhttps:&#x2F;&#x2F;twitter.com&#x2F;juancampa<p>[ my public key: https:&#x2F;&#x2F;keybase.io&#x2F;juancampa; my proof: https:&#x2F;&#x2F;keybase.io&#x2F;juancampa&#x2F;sigs&#x2F;jp-kfhqdcxNrqb8MBKulYSIiQBC6NtNYEWt4l1Fr5X0 ]",
      "created": 1351561142,
      "id": "juancampa",
      "karma": 1735,
      "submitted": [28841629, 28382215, 28318926, 28297628, 28261115, 28257688, 28242373, 28242370, 28241991, 28212358, 28131848, 28079126, 28079061, 28037356, 28037300, 28032363, 28032337, 28020944, 28008737, 27998082, 27973732, 27972857, 27893757, 27861424, 27860053, 27859291, 27855991, 27839562, 27839415, 27839392, 27838419, 27701614, 27679960, 27675743, 27634343, 27530672, 27519100, 27270017, 27269732, 27266517, 27195156, 27189506, 27189398, 27188076, 27157873, 27157831, 27157747, 27156913, 27154921, 27041947, 27041946, 26970512, 26970473, 26956103, 26881056, 26791403, 26754220, 26638267, 26623936, 26621504, 26583072, 26583071, 26581861, 26581410, 26549783, 26542974, 26430047, 26419529, 26315854, 26315733, 26315263, 26315009, 26306025, 26154286, 26115167, 26070570, 26048773, 26031023, 25936739, 25897005, 25849026, 25793953, 25767057, 25701299, 25672039, 25634211, 25584616, 25577110, 25566028, 25520160, 25496166, 25472971, 25388645, 25324904, 25302410, 25272367, 25232080, 25202680, 25179377, 25151453, 25031534, 25019810, 25008640, 24908788, 24833424, 24719990, 24701285, 24701231, 24599699, 24488868, 24356114, 24355763, 24347739, 24341077, 24293522, 24267942, 24218083, 24215303, 23940088, 23911149, 23876342, 23847340, 23786524, 23701184, 23645447, 23575357, 23345914, 23172243, 23161656, 22995946, 22995484, 22955543, 22935941, 22763898, 22763270, 22518010, 22424740, 22212818, 22176849, 22164261, 22021388, 21985360, 21931625, 21904579, 21846396, 21772956, 21625294, 21474368, 21324201, 21324140, 21235910, 21148550, 21005532, 20991245, 20979159, 20943464, 20759565, 20474526, 20326150, 20239603, 20077636, 20077423, 20077389, 20002162, 19827075, 19763338, 19651342, 19576201, 19576188, 19521783, 19410303, 19203399, 19056271, 19049168, 19008682, 18990336, 18983432, 18893779, 18808048, 18758816, 18668367, 18621044, 18620984, 18488077, 18487845, 18464031, 18392867, 18392846, 18392752, 18377219, 18348503, 18321492, 18306268, 18301548, 18296390, 18286261, 18250674, 18250501, 18250496, 18250490, 18208805, 18205158, 18157936, 18150548, 18135516, 18122836, 18102067, 18101996, 18068368, 18068066, 18053408, 18044396, 18026615, 17874572, 17874456, 17874450, 17849062, 17801971, 17795660, 17790476, 17784795, 17779425, 17776043, 17776030, 17771202, 17760654, 17760544, 17747635, 17746578, 17746561, 17735211, 17721473, 17692505, 17685176, 17683908, 17683839, 17683237, 17683187, 17683159, 17683029, 17682726, 17682494, 17583456, 17563982, 17555115, 17509588, 17492301, 17454843, 17442563, 17358815, 17289924, 17242681, 17231773, 17231227, 17120312, 17093749, 16983312, 16983308, 16983099, 16983049, 16935914, 16432550, 16388567, 16386397, 16355008, 16346485, 16336413, 16334369, 16284335, 16284191, 16275518, 16268316, 16228142, 16227898, 16227845, 16218021, 16181538, 16181536, 15973462, 15884741, 15884718, 15839973, 15791637, 15791433, 15791271, 15791253, 15791246, 15791211, 15791174, 15791087, 15790753, 15790562, 15552094, 15551974, 15496423, 15496389, 15460782, 15454520, 15452129, 15452075, 15451998, 15451983, 15446884, 15341144, 15307909, 15271481, 15196191, 15138022, 15137994, 14870707, 14870480, 14786098, 14775532, 14765669, 14672573, 14364068, 14215429, 14160227, 14159742, 14100697, 14093972, 13831266, 13798745, 13701171, 13621380, 13582742, 13563403, 13525188, 13429233, 13214350, 12995028, 12994946, 12858871, 12272866, 11557915, 11378718]
    }
  },
  create: () => console.log('created user'),
}

export const User = {
  async submitted({ obj, generateSubquery }) {
    const subquery = generateSubquery();
    return obj.submitted &&
      // Promise.all(obj.submitted.slice(0, 5).map((id) => apiGet(`/item/${id}.json`)))
      Promise.all(obj.submitted.slice(0, 5).map((id) => ItemCollection.one({ args: { id } })))
  }
}
