const excercises = [
  {
    id: 1,
    muscleGroupId: 0,
    name: "Cable Flye",
    url: "https://www.youtube.com/watch?v=4mfLHnFL0Uw&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=1",
    axis: "",
  },
  {
    id: 2,
    muscleGroupId: 0,
    name: "Cable Bent Flye",
    url: "https://www.youtube.com/watch?v=Cj6P91eFXkM&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=2",
    axis: "",
  },
  {
    id: 3,
    muscleGroupId: 0,
    name: "Cable Underhand Flye",
    url: "https://www.youtube.com/watch?v=e_8HLu59-to&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=3",
    axis: "",
  },
  {
    id: 4,
    muscleGroupId: 0,
    name: "Cambered Bar Bench Press",
    url: "https://www.youtube.com/watch?v=_9VlfuYYC7w&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=4",
    axis: "",
  },
  {
    id: 5,
    muscleGroupId: 0,
    name: "Deficit Pushup",
    url: "https://www.youtube.com/watch?v=gmNlqsE3Onc&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=5",
    axis: "",
  },
  {
    id: 6,
    muscleGroupId: 0,
    name: "Flat Dumbbell Bench Press",
    url: "https://www.youtube.com/watch?v=YQ2s_Y7g5Qk&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=6",
    axis: "",
  },
  {
    id: 7,
    muscleGroupId: 0,
    name: "Flat Dumbbell Flye",
    url: "https://www.youtube.com/watch?v=JFm8KbhjibM&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=7",
    axis: "",
  },
  {
    id: 8,
    muscleGroupId: 0,
    name: "Flat Dumbbell Press/Flye",
    url: "https://www.youtube.com/watch?v=BhlL-esnitU&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=8",
    axis: "",
  },
  {
    id: 9,
    muscleGroupId: 0,
    name: "Flat Hammer Machine Press",
    url: "https://www.youtube.com/watch?v=aV1U_mK3XOs&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=9",
    axis: "",
  },
  {
    id: 10,
    muscleGroupId: 0,
    name: "Hammer Machine Press",
    url: "https://www.youtube.com/watch?v=0Wa9CfRXUkA&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=10",
    axis: "",
  },
  {
    id: 11,
    muscleGroupId: 0,
    name: "High Incline Dumbbell Press",
    url: "https://www.youtube.com/watch?v=GFYrRBoov3w&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=11",
    axis: "",
  },
  {
    id: 12,
    muscleGroupId: 0,
    name: "Incline Dumbbell Flye",
    url: "https://www.youtube.com/watch?v=8oR5hBwbIBc&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=12",
    axis: "",
  },
  {
    id: 13,
    muscleGroupId: 0,
    name: "Incline Dumbbell Press",
    url: "https://www.youtube.com/watch?v=5CECBjd7HLQ&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=13",
    axis: "",
  },
  {
    id: 14,
    muscleGroupId: 0,
    name: "Incline Dumbbell Press/Flye",
    url: "https://www.youtube.com/watch?v=lTfiohnjbyM&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=14",
    axis: "",
  },
  {
    id: 15,
    muscleGroupId: 0,
    name: "Incline Machine Chest Press",
    url: "https://www.youtube.com/watch?v=TrTSvn5-MTk&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=15",
    axis: "",
  },
  {
    id: 16,
    muscleGroupId: 0,
    name: "Incline Barbell Press Medium Grip",
    url: "https://www.youtube.com/watch?v=lJ2o89kcnxY&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=16",
    axis: "",
  },
  {
    id: 17,
    muscleGroupId: 0,
    name: "Incline Barbell Press Narrow Grip",
    url: "https://www.youtube.com/watch?v=Zfi0KcIJi6c&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=17",
    axis: "",
  },
  {
    id: 18,
    muscleGroupId: 0,
    name: "Incline Barbell Press Wide Grip",
    url: "https://www.youtube.com/watch?v=FxQ0XEoFYQk&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=18",
    axis: "",
  },
  {
    id: 19,
    muscleGroupId: 0,
    name: "Low Incline Dumbbell Press",
    url: "https://www.youtube.com/watch?v=B09ZkYsnKko&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=19",
    axis: "",
  },
  {
    id: 20,
    muscleGroupId: 0,
    name: "Machine Chest Press",
    url: "https://www.youtube.com/watch?v=NwzUje3z0qY&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=20",
    axis: "",
  },
  {
    id: 21,
    muscleGroupId: 0,
    name: "Machine Flye",
    url: "https://www.youtube.com/watch?v=FDay9wFe5uE&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=21",
    axis: "",
  },
  {
    id: 22,
    muscleGroupId: 0,
    name: "Medium Grip Bench Press",
    url: "https://www.youtube.com/watch?v=gMgvBspQ9lk&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=22",
    axis: "",
  },
  {
    id: 23,
    muscleGroupId: 0,
    name: "Narrow Pushup",
    url: "https://www.youtube.com/watch?v=Lz1aFtuNvEQ&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=23",
    axis: "",
  },
  {
    id: 24,
    muscleGroupId: 0,
    name: "Narrow Grip Bench Press",
    url: "https://www.youtube.com/watch?v=FiQUzPtS90E&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=24",
    axis: "",
  },
  {
    id: 25,
    muscleGroupId: 0,
    name: "Pec Deck Flye",
    url: "https://www.youtube.com/watch?v=O-OBCfyh9Fw&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=25",
    axis: "",
  },
  {
    id: 26,
    muscleGroupId: 0,
    name: "Pushup",
    url: "https://www.youtube.com/watch?v=mm6_WcoCVTA&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=26",
    axis: "",
  },
  {
    id: 27,
    muscleGroupId: 0,
    name: "Smith Machine Bench Press",
    url: "https://www.youtube.com/watch?v=O5viuEPDXKY&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=27",
    axis: "",
  },
  {
    id: 28,
    muscleGroupId: 0,
    name: "Smith Machine Incline Press",
    url: "https://www.youtube.com/watch?v=8urE8Z8AMQ4&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=28",
    axis: "",
  },
  {
    id: 29,
    muscleGroupId: 0,
    name: "Smith Machine Narrow Grip Press",
    url: "https://www.youtube.com/watch?v=qf_FTh3QyYs&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=29",
    axis: "",
  },
  {
    id: 30,
    muscleGroupId: 0,
    name: "Smith Machine Narrow Grip Incline Press",
    url: "https://www.youtube.com/watch?v=PYijbpxFAv8&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=30",
    axis: "",
  },
  {
    id: 31,
    muscleGroupId: 0,
    name: "Smith Machine Wide Grip Press",
    url: "https://www.youtube.com/watch?v=AK0ycfB_kYo&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=31",
    axis: "",
  },
  {
    id: 32,
    muscleGroupId: 0,
    name: "Smith Machine Wide Grip Incline Press",
    url: "https://www.youtube.com/watch?v=SHL81neluiI&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=32",
    axis: "",
  },
  {
    id: 33,
    muscleGroupId: 0,
    name: "Wide Grip Bench Press",
    url: "https://www.youtube.com/watch?v=EeE3f4VWFDo&list=PLyqKj7LwU2RuyZwWCIiDHuFZGN11QW3Ff&index=33",
    axis: "",
  },
  {
    id: 34,
    muscleGroupId: 1,
    name: "Barbell Bent Over Row",
    url: "https://youtu.be/6FZHJGzMFEc",
    axis: "Horizontal Pulling",
  },
  {
    id: 35,
    muscleGroupId: 1,
    name: "Cambered Bar Row",
    url: "https://youtu.be/jiowkUMomlw",
    axis: "Horizontal Pulling",
  },
  {
    id: 36,
    muscleGroupId: 1,
    name: "Barbell Row to Chest",
    url: "https://youtu.be/UPGuwx7GQ9s",
    axis: "Horizontal Pulling",
  },
  {
    id: 37,
    muscleGroupId: 1,
    name: "Underhand EZ Bar Row",
    url: "https://youtu.be/H260SUUyJBM",
    axis: "Horizontal Pulling",
  },
  {
    id: 38,
    muscleGroupId: 1,
    name: "Smith Machine Row",
    url: "https://youtu.be/3QcJggd_L24",
    axis: "Horizontal Pulling",
  },
  {
    id: 39,
    muscleGroupId: 1,
    name: "Chest Supported Row",
    url: "https://youtu.be/0UBRfiO4zDs",
    axis: "Horizontal Pulling",
  },
  {
    id: 40,
    muscleGroupId: 1,
    name: "Machine Chest Supported Row",
    url: "https://youtu.be/_FrrYQxA6kc",
    axis: "Horizontal Pulling",
  },
  {
    id: 41,
    muscleGroupId: 1,
    name: "T Bar Row",
    url: "https://youtu.be/yPis7nlbqdY",
    axis: "Horizontal Pulling",
  },
  {
    id: 42,
    muscleGroupId: 1,
    name: "Incline Dumbbell Row",
    url: "https://youtu.be/tZUYS7X50so",
    axis: "Horizontal Pulling",
  },
  {
    id: 43,
    muscleGroupId: 1,
    name: "Two Arm Dumbbell Row",
    url: "https://youtu.be/5PoEksoJNaw",
    axis: "Horizontal Pulling",
  },
  {
    id: 44,
    muscleGroupId: 1,
    name: "Single Arm Dumbbell Row",
    url: "https://youtu.be/DMo3HJoawrU",
    axis: "Horizontal Pulling",
  },
  {
    id: 45,
    muscleGroupId: 1,
    name: "Hammer Low Row",
    url: "https://youtu.be/opjbouBmUWg",
    axis: "Horizontal Pulling",
  },
  {
    id: 46,
    muscleGroupId: 1,
    name: "Inverted Row",
    url: "https://youtu.be/KOaCM1HMwU0",
    axis: "Horizontal Pulling",
  },
  {
    id: 47,
    muscleGroupId: 1,
    name: "Seal Row",
    url: "https://youtu.be/4H2ItXwUTp8",
    axis: "Horizontal Pulling",
  },
  {
    id: 48,
    muscleGroupId: 1,
    name: "Seated Cable Row",
    url: "https://youtu.be/UCXxvVItLoM",
    axis: "Horizontal Pulling",
  },
  {
    id: 49,
    muscleGroupId: 1,
    name: "Normal Grip Pullup",
    url: "https://youtu.be/iWpoegdfgtc",
    axis: "Vertical Pulling",
  },
  {
    id: 50,
    muscleGroupId: 1,
    name: "Wide Grip Pullup",
    url: "https://youtu.be/GRgWPT9XSQQ",
    axis: "Vertical Pulling",
  },
  {
    id: 51,
    muscleGroupId: 1,
    name: "Parallel Grip Pullup",
    url: "https://youtu.be/XWt6FQAK5wM",
    axis: "Vertical Pulling",
  },
  {
    id: 52,
    muscleGroupId: 1,
    name: "Underhand Pullup",
    url: "https://youtu.be/9JC1EwqezGY",
    axis: "Vertical Pulling",
  },
  {
    id: 53,
    muscleGroupId: 1,
    name: "Assisted Normal Grip Pullup",
    url: "https://youtu.be/8ygapPMYK1I",
    axis: "Vertical Pulling",
  },
  {
    id: 54,
    muscleGroupId: 1,
    name: "Assisted Wide Grip Pullup",
    url: "https://youtu.be/0tiC6RUZL8Y",
    axis: "Vertical Pulling",
  },
  {
    id: 55,
    muscleGroupId: 1,
    name: "Assisted Parallel Pullup",
    url: "https://youtu.be/GdsRZAeeDUc",
    axis: "Vertical Pulling",
  },
  {
    id: 56,
    muscleGroupId: 1,
    name: "Assisted Underhand Pullup",
    url: "https://youtu.be/L4ChTwrXTjc",
    axis: "Vertical Pulling",
  },
  {
    id: 57,
    muscleGroupId: 1,
    name: "Normal Grip Pulldown",
    url: "https://youtu.be/EUIri47Epcg",
    axis: "Vertical Pulling",
  },
  {
    id: 58,
    muscleGroupId: 1,
    name: "Wide Grip Pulldown",
    url: "https://youtu.be/YCKPD4BSD2E",
    axis: "Vertical Pulling",
  },
  {
    id: 59,
    muscleGroupId: 1,
    name: "Parallel Pulldown",
    url: "https://youtu.be/--utaPT7XYQ",
    axis: "Vertical Pulling",
  },
  {
    id: 60,
    muscleGroupId: 1,
    name: "Underhand Pulldown",
    url: "https://youtu.be/VprlTxpB1rk",
    axis: "Vertical Pulling",
  },
  {
    id: 61,
    muscleGroupId: 1,
    name: "Narrow Grip Pulldown",
    url: "https://youtu.be/GRHLNfmr_oI",
    axis: "Vertical Pulling",
  },
  {
    id: 62,
    muscleGroupId: 1,
    name: "Hammer High Row",
    url: "https://youtu.be/gg5hwJuv6KI",
    axis: "Vertical Pulling",
  },
  {
    id: 63,
    muscleGroupId: 1,
    name: "Dumbbell Pullover",
    url: "https://youtu.be/jQjWlIwG4sI",
    axis: "Vertical Pulling",
  },
  {
    id: 64,
    muscleGroupId: 1,
    name: "Machine Pullover",
    url: "https://youtu.be/oxpAl14EYyc",
    axis: "Vertical Pulling",
  },
  {
    id: 65,
    muscleGroupId: 1,
    name: "Straight Arm Pulldown",
    url: "https://youtu.be/G9uNaXGTJ4w",
    axis: "Vertical Pulling",
  },
  {
    id: 66,
    muscleGroupId: 2,
    name: "Alternating Dumbbell Curl",
    url: "https://www.youtube.com/watch?v=iixND1P2lik&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=1",
    axis: "",
  },
  {
    id: 67,
    muscleGroupId: 2,
    name: "Barbell Curl Narrow Grip",
    url: "https://www.youtube.com/watch?v=pUS6HBQjRmc&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=2",
    axis: "",
  },
  {
    id: 68,
    muscleGroupId: 2,
    name: "Barbell Curl Normal Grip",
    url: "https://www.youtube.com/watch?v=JnLFSFurrqQ&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=3",
    axis: "",
  },
  {
    id: 69,
    muscleGroupId: 2,
    name: "Cable EZ Bar Curl Wide Grip",
    url: "https://www.youtube.com/watch?v=yuozln3CC94&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=4",
    axis: "",
  },
  {
    id: 70,
    muscleGroupId: 2,
    name: "Cable EZ Bar Curl",
    url: "https://www.youtube.com/watch?v=opFVuRi_3b8&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=5",
    axis: "",
  },
  {
    id: 71,
    muscleGroupId: 2,
    name: "Dumbbell Single Arm Preacher Curl",
    url: "https://www.youtube.com/watch?v=fuK3nFvwgXk&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=6",
    axis: "",
  },
  {
    id: 72,
    muscleGroupId: 2,
    name: "Dumbbell Spider Curl",
    url: "https://www.youtube.com/watch?v=ke2shAeQ0O8&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=7",
    axis: "",
  },
  {
    id: 73,
    muscleGroupId: 2,
    name: "Dumbbell Twist Curl",
    url: "https://www.youtube.com/watch?v=tRXw8HQ7-oA&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=8",
    axis: "",
  },
  {
    id: 74,
    muscleGroupId: 2,
    name: "EZ Bar Curl Narrow Grip",
    url: "https://www.youtube.com/watch?v=cdmnvo3augg&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=9",
    axis: "",
  },
  {
    id: 75,
    muscleGroupId: 2,
    name: "EZ Bar Curl Wide Grip",
    url: "https://www.youtube.com/watch?v=EK747VC37yE&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=10",
    axis: "",
  },
  {
    id: 76,
    muscleGroupId: 2,
    name: "EZ Bar Preacher Curl",
    url: "https://www.youtube.com/watch?v=sxA__DoLsgo&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=11",
    axis: "",
  },
  {
    id: 77,
    muscleGroupId: 2,
    name: "EZ Bar Spider Curl",
    url: "https://www.youtube.com/watch?v=WG3vdcq__I0&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=12",
    axis: "",
  },
  {
    id: 78,
    muscleGroupId: 2,
    name: "Hammer Curl",
    url: "https://www.youtube.com/watch?v=XOEL4MgekYE&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=13",
    axis: "",
  },
  {
    id: 79,
    muscleGroupId: 2,
    name: "Incline Dumbbell Curl",
    url: "https://www.youtube.com/watch?v=aTYlqC_JacQ&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=14",
    axis: "",
  },
  {
    id: 80,
    muscleGroupId: 2,
    name: "Machine Preacher Curl",
    url: "https://www.youtube.com/watch?v=Ja6ZlIDONac&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=15",
    axis: "",
  },
  {
    id: 81,
    muscleGroupId: 2,
    name: "Rope Twist Curl",
    url: "https://www.youtube.com/watch?v=2CDKTFFp5fA&list=PLyqKj7LwU2Rt1cwOsHwdXa2TiRzjA6uoB&index=16",
    axis: "",
  },
  {
    id: 82,
    muscleGroupId: 3,
    name: "Barbell Triceps Overhead Extension",
    url: "https://www.youtube.com/watch?v=q5X9thiKofE&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea",
    axis: "",
  },
  {
    id: 83,
    muscleGroupId: 3,
    name: "Assisted Dip",
    url: "https://www.youtube.com/watch?v=yZ83t4mrPrI&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=2",
    axis: "",
  },
  {
    id: 84,
    muscleGroupId: 3,
    name: "Barbell Skullcrusher",
    url: "https://www.youtube.com/watch?v=l3rHYPtMUo8&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=3",
    axis: "",
  },
  {
    id: 85,
    muscleGroupId: 3,
    name: "Cable Overhead Triceps Extension",
    url: "https://www.youtube.com/watch?v=1u18yJELsh0&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=4",
    axis: "",
  },
  {
    id: 86,
    muscleGroupId: 3,
    name: "Cable Single Arm Pushdown",
    url: "https://www.youtube.com/watch?v=Cp_bShvMY4c&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=5",
    axis: "",
  },
  {
    id: 87,
    muscleGroupId: 3,
    name: "Cable Triceps Pushdown",
    url: "https://www.youtube.com/watch?v=6Fzep104f0s&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=6",
    axis: "",
  },
  {
    id: 88,
    muscleGroupId: 3,
    name: "Dip",
    url: "https://www.youtube.com/watch?v=4LA1kF7yCGo&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=7",
    axis: "",
  },
  {
    id: 89,
    muscleGroupId: 3,
    name: "Dumbbell Skullcrusher",
    url: "https://www.youtube.com/watch?v=jPjhQ2hsAds&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=8",
    axis: "",
  },
  {
    id: 90,
    muscleGroupId: 3,
    name: "EZ Bar Overhead Triceps Extension",
    url: "https://www.youtube.com/watch?v=IdZ7HXnatko&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=9",
    axis: "",
  },
  {
    id: 91,
    muscleGroupId: 3,
    name: "Inverted Skullcrusher",
    url: "https://www.youtube.com/watch?v=1lrjpLuXH4w&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=10",
    axis: "",
  },
  {
    id: 92,
    muscleGroupId: 3,
    name: "Machine Triceps Extension",
    url: "https://www.youtube.com/watch?v=Bx8ga1BLHLE&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=11",
    axis: "",
  },
  {
    id: 93,
    muscleGroupId: 3,
    name: "Machine Triceps Pushdown",
    url: "https://www.youtube.com/watch?v=OChuGyCSC7U&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=12",
    axis: "",
  },
  {
    id: 94,
    muscleGroupId: 3,
    name: "Rope Overhead Triceps Extension",
    url: "https://www.youtube.com/watch?v=kqidUIf1eJE&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=13",
    axis: "",
  },
  {
    id: 95,
    muscleGroupId: 3,
    name: "Rope Pushdown",
    url: "https://www.youtube.com/watch?v=-xa-6cQaZKY&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=14",
    axis: "",
  },
  {
    id: 96,
    muscleGroupId: 3,
    name: "Seated EZ Bar Overhead Triceps Extension",
    url: "https://www.youtube.com/watch?v=gcRZqG8t44c&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=15",
    axis: "",
  },
  {
    id: 97,
    muscleGroupId: 3,
    name: "JM Press",
    url: "https://www.youtube.com/watch?v=Tih5iHyELsE&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=16",
    axis: "",
  },
  {
    id: 98,
    muscleGroupId: 3,
    name: "Seated Barbell Overhead Triceps Extension",
    url: "https://www.youtube.com/watch?v=ktU2H0DDmwk&list=PLyqKj7LwU2RtMd8vP3NEoig1RPJQK78Ea&index=17",
    axis: "",
  },
  {
    id: 99,
    muscleGroupId: 4,
    name: "Barbell Upright Row",
    url: "https://www.youtube.com/watch?v=um3VVzqunPU&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=1",
    axis: "",
  },
  {
    id: 100,
    muscleGroupId: 4,
    name: "Cable Cross Body Lateral Raise",
    url: "https://www.youtube.com/watch?v=2OMbdPF7mz4&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=2",
    axis: "",
  },
  {
    id: 101,
    muscleGroupId: 4,
    name: "Cable Face Pull",
    url: "https://www.youtube.com/watch?v=qr3ziolhjvQ&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=3",
    axis: "",
  },
  {
    id: 102,
    muscleGroupId: 4,
    name: "Dumbbell Upright Row",
    url: "https://www.youtube.com/watch?v=Ub6QruNKfbY&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=4",
    axis: "",
  },
  {
    id: 103,
    muscleGroupId: 4,
    name: "Lateral Raise",
    url: "https://www.youtube.com/watch?v=OuG1smZTsQQ&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=5",
    axis: "",
  },
  {
    id: 104,
    muscleGroupId: 4,
    name: "Leaning Cable Lateral Raise",
    url: "https://www.youtube.com/watch?v=lq7eLC30b9w&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=6",
    axis: "",
  },
  {
    id: 105,
    muscleGroupId: 4,
    name: "Machine Lateral Raise",
    url: "https://www.youtube.com/watch?v=0o07iGKUarI&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=7",
    axis: "",
  },
  {
    id: 106,
    muscleGroupId: 4,
    name: "Smith Machine Upright Row",
    url: "https://www.youtube.com/watch?v=QIpa-9dtkgA&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=8",
    axis: "",
  },
  {
    id: 107,
    muscleGroupId: 4,
    name: "Thumbs Down Lateral Raise",
    url: "https://www.youtube.com/watch?v=D1f7d1OcobY&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=9",
    axis: "",
  },
  {
    id: 108,
    muscleGroupId: 4,
    name: "Top Hold Lateral Raise",
    url: "https://www.youtube.com/watch?v=SKf8wHlIFX0&list=PLyqKj7LwU2RuNVJBl0CtfZdxQ99IhKCcu&index=10",
    axis: "",
  },
  {
    id: 109,
    muscleGroupId: 5,
    name: "Barbell Front Raise",
    url: "https://www.youtube.com/watch?v=_ikCPws1mbE&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az",
    axis: "",
  },
  {
    id: 110,
    muscleGroupId: 5,
    name: "Cable Underhand Front Raise",
    url: "https://www.youtube.com/watch?v=yIoAcMD3jcE&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=2",
    axis: "",
  },
  {
    id: 111,
    muscleGroupId: 5,
    name: "Dumbbell Front Raise",
    url: "https://www.youtube.com/watch?v=hRJ6tR5-if0&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=3",
    axis: "",
  },
  {
    id: 112,
    muscleGroupId: 5,
    name: "EZ Bar Underhand Front Raise",
    url: "https://www.youtube.com/watch?v=87pZAbYjXc4&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=4",
    axis: "",
  },
  {
    id: 113,
    muscleGroupId: 5,
    name: "Machine Shoulder Press",
    url: "https://www.youtube.com/watch?v=WvLMauqrnK8&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=5",
    axis: "",
  },
  {
    id: 114,
    muscleGroupId: 5,
    name: "Seated Barbell Shoulder Press",
    url: "https://www.youtube.com/watch?v=IuzRCN6eG6Y&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=6",
    axis: "",
  },
  {
    id: 115,
    muscleGroupId: 5,
    name: "Seated Dumbbell Shoulder Press",
    url: "https://www.youtube.com/watch?v=HzIiNhHhhtA&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=7",
    axis: "",
  },
  {
    id: 116,
    muscleGroupId: 5,
    name: "Smith Machine Seated Shoulder Press",
    url: "https://www.youtube.com/watch?v=OLqZDUUD2b0&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=8",
    axis: "",
  },
  {
    id: 117,
    muscleGroupId: 5,
    name: "Standing Barbell Shoulder Press",
    url: "https://www.youtube.com/watch?v=G2qpTG1Eh40&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=9",
    axis: "",
  },
  {
    id: 118,
    muscleGroupId: 5,
    name: "Standing Dumbbell Shoulder Press",
    url: "https://www.youtube.com/watch?v=Raemd3qWgJc&list=PLyqKj7LwU2RtjiVutSXk5uC2h7KVMu1Az&index=10",
    axis: "",
  },
  {
    id: 119,
    muscleGroupId: 6,
    name: "Barbell Shrug",
    url: "https://www.youtube.com/watch?v=M_MjF5Nm_h4&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=2",
    axis: "",
  },
  {
    id: 120,
    muscleGroupId: 6,
    name: "Barbell Bent Shrug",
    url: "https://www.youtube.com/watch?v=d9daNDIXtK8&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc",
    axis: "",
  },
  {
    id: 121,
    muscleGroupId: 6,
    name: "Dumbbell Shrug",
    url: "https://www.youtube.com/watch?v=_t3lrPI6Ns4&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=9",
    axis: "",
  },
  {
    id: 122,
    muscleGroupId: 6,
    name: "Dumbbell Bent Shrug",
    url: "https://www.youtube.com/watch?v=5z7ZtboxbBY&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=7",
    axis: "",
  },
  {
    id: 123,
    muscleGroupId: 6,
    name: "Dumbbell Lean Shrug",
    url: "https://www.youtube.com/watch?v=GH_l85Ky3vA&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=8",
    axis: "",
  },
  {
    id: 124,
    muscleGroupId: 6,
    name: "Cable Single Arm Side Shrug",
    url: "https://www.youtube.com/watch?v=BeIcUXQ3RDc&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=6",
    axis: "",
  },
  {
    id: 125,
    muscleGroupId: 6,
    name: "Cable Side Shrug",
    url: "https://www.youtube.com/watch?v=2zaT3WAgZi0&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=5",
    axis: "",
  },
  {
    id: 126,
    muscleGroupId: 6,
    name: "Seated Dumbbell Shrug",
    url: "https://www.youtube.com/watch?v=zgToz5FiI-E&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=10",
    axis: "",
  },
  {
    id: 127,
    muscleGroupId: 6,
    name: "Cable Shrug",
    url: "https://www.youtube.com/watch?v=YykmcX2b-LY&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=4",
    axis: "",
  },
  {
    id: 128,
    muscleGroupId: 6,
    name: "Cable Bent Shrug",
    url: "https://www.youtube.com/watch?v=nOn_Bz0zrwQ&list=PLyqKj7LwU2RvynkwL93EcfuPUaDrWNOEc&index=3",
    axis: "",
  },
  {
    id: 129,
    muscleGroupId: 7,
    name: "Hanging Knee Raise",
    url: "https://www.youtube.com/watch?v=RD_A-Z15ER4&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=2&t=0s",
    axis: "",
  },
  {
    id: 130,
    muscleGroupId: 7,
    name: "Hanging Straight Leg Raise",
    url: "https://www.youtube.com/watch?v=7FwGZ8qY5OU&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=2",
    axis: "",
  },
  {
    id: 131,
    muscleGroupId: 7,
    name: "Machine Crunch",
    url: "https://www.youtube.com/watch?v=-OUSBPnHvsQ&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=3",
    axis: "",
  },
  {
    id: 132,
    muscleGroupId: 7,
    name: "Modified Candlestick",
    url: "https://www.youtube.com/watch?v=T_X5rb3G5lk&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=4",
    axis: "",
  },
  {
    id: 133,
    muscleGroupId: 7,
    name: "Reaching Situp",
    url: "https://www.youtube.com/watch?v=pXg8qppif7I&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=5",
    axis: "",
  },
  {
    id: 134,
    muscleGroupId: 7,
    name: "Rope Crunch",
    url: "https://www.youtube.com/watch?v=6GMKPQVERzw&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=6",
    axis: "",
  },
  {
    id: 135,
    muscleGroupId: 7,
    name: "Slant Board Situp",
    url: "https://www.youtube.com/watch?v=DAnTf16NcT0&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=7",
    axis: "",
  },
  {
    id: 136,
    muscleGroupId: 7,
    name: "V-Up",
    url: "https://www.youtube.com/watch?v=BIOM5eSsJ_8&list=PLyqKj7LwU2RvTgEW_QlCCjtIL5d_KP_-I&index=8",
    axis: "",
  },
  {
    id: 137,
    muscleGroupId: 8,
    name: "Barbell Hip Thrust",
    url: "https://www.youtube.com/watch?v=EF7jXP17DPE&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA",
    axis: "",
  },
  {
    id: 138,
    muscleGroupId: 8,
    name: "Barbell Walking Lunge",
    url: "https://www.youtube.com/watch?v=_meXEWq5MOQ&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=2",
    axis: "",
  },
  {
    id: 139,
    muscleGroupId: 8,
    name: "Cable Pull-Through",
    url: "https://www.youtube.com/watch?v=pv8e6OSyETE&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=3",
    axis: "",
  },
  {
    id: 140,
    muscleGroupId: 8,
    name: "Deadlift",
    url: "https://www.youtube.com/watch?v=AweC3UaM14o&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=4",
    axis: "",
  },
  {
    id: 141,
    muscleGroupId: 8,
    name: "Deficit 25’s Deadlift",
    url: "https://www.youtube.com/watch?v=kvWcDHH62j0&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=5",
    axis: "",
  },
  {
    id: 142,
    muscleGroupId: 8,
    name: "Deficit Deadlift",
    url: "https://www.youtube.com/watch?v=X-uKkAukJVA&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=6",
    axis: "",
  },
  {
    id: 143,
    muscleGroupId: 8,
    name: "Dumbbell Walking Lunge",
    url: "https://www.youtube.com/watch?v=eFWCn5iEbTU&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=7",
    axis: "",
  },
  {
    id: 144,
    muscleGroupId: 8,
    name: "Machine Glute Kickback",
    url: "https://www.youtube.com/watch?v=NLDBFtSNhqg&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=8",
    axis: "",
  },
  {
    id: 145,
    muscleGroupId: 8,
    name: "Machine Hip Thrust",
    url: "https://www.youtube.com/watch?v=ZSPmIyX9RZs&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=9",
    axis: "",
  },
  {
    id: 146,
    muscleGroupId: 8,
    name: "Reverse Lunge",
    url: "https://www.youtube.com/watch?v=TQfhY5oJ_Sc&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=10",
    axis: "",
  },
  {
    id: 147,
    muscleGroupId: 8,
    name: "Single Leg Hip Thrust",
    url: "https://www.youtube.com/watch?v=lzDgRRuBdqY&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=11",
    axis: "",
  },
  {
    id: 148,
    muscleGroupId: 8,
    name: "Split Squat",
    url: "https://www.youtube.com/watch?v=jNihW0WDIL4&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=12",
    axis: "",
  },
  {
    id: 149,
    muscleGroupId: 8,
    name: "Sumo Deadlift",
    url: "https://www.youtube.com/watch?v=pfSMst14EFk&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=13",
    axis: "",
  },
  {
    id: 150,
    muscleGroupId: 8,
    name: "Sumo Deficit Deadlift",
    url: "https://www.youtube.com/watch?v=bnYekgCKfv0&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=14",
    axis: "",
  },
  {
    id: 151,
    muscleGroupId: 8,
    name: "Sumo Squat",
    url: "https://www.youtube.com/watch?v=4eDJa5MnAmY&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=15",
    axis: "",
  },
  {
    id: 152,
    muscleGroupId: 8,
    name: "Trap Bar Deadlift",
    url: "https://www.youtube.com/watch?v=v709aJKv-gM&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=16",
    axis: "",
  },
  {
    id: 153,
    muscleGroupId: 8,
    name: "Dumbbell Reverse Lunge",
    url: "https://www.youtube.com/watch?v=D-c2CWwEweo&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=17",
    axis: "",
  },
  {
    id: 154,
    muscleGroupId: 8,
    name: "Dumbbell Split Squat",
    url: "https://www.youtube.com/watch?v=pjAewD4LxXs&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=18",
    axis: "",
  },
  {
    id: 155,
    muscleGroupId: 8,
    name: "Dumbbell Single Leg Hip Thrust",
    url: "https://www.youtube.com/watch?v=CSXVj047Ss4&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=19",
    axis: "",
  },
  {
    id: 156,
    muscleGroupId: 8,
    name: "Wide Stance Belt Squat",
    url: "https://www.youtube.com/watch?v=LU2GYsqkgAQ&list=PLyqKj7LwU2RtZnGDmtpyhDdvUHFvVyZnA&index=24",
    axis: "",
  },
  {
    id: 157,
    muscleGroupId: 9,
    name: "Feet Forward Smith Squat",
    url: "https://www.youtube.com/watch?v=-eO_VydErV0&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=1",
    axis: "",
  },
  {
    id: 158,
    muscleGroupId: 9,
    name: "Front Squat Cross Grip",
    url: "https://www.youtube.com/watch?v=0DQvn2qsOG4&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=2",
    axis: "",
  },
  {
    id: 159,
    muscleGroupId: 9,
    name: "Front Squat",
    url: "https://www.youtube.com/watch?v=HHxNbhP16UE&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=3",
    axis: "",
  },
  {
    id: 160,
    muscleGroupId: 9,
    name: "Hack Squat",
    url: "https://www.youtube.com/watch?v=rYgNArpwE7E&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=4",
    axis: "",
  },
  {
    id: 161,
    muscleGroupId: 9,
    name: "High Bar Squat",
    url: "https://www.youtube.com/watch?v=i7J5h7BJ07g&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=5",
    axis: "",
  },
  {
    id: 162,
    muscleGroupId: 9,
    name: "Leg Extension",
    url: "https://www.youtube.com/watch?v=m0FOpMEgero&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=6",
    axis: "",
  },
  {
    id: 163,
    muscleGroupId: 9,
    name: "Leg Press",
    url: "https://www.youtube.com/watch?v=yZmx_Ac3880&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=7",
    axis: "",
  },
  {
    id: 164,
    muscleGroupId: 9,
    name: "Narrow Stance Squat",
    url: "https://www.youtube.com/watch?v=1IIPcUCKxcE&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=8",
    axis: "",
  },
  {
    id: 165,
    muscleGroupId: 9,
    name: "Belt Squat",
    url: "https://www.youtube.com/watch?v=L__-j2v_LPM&list=PLyqKj7LwU2RuAg-us4mzap6izNcc1fuRW&index=14",
    axis: "",
  },
  {
    id: 166,
    muscleGroupId: 10,
    name: "45 Degree Back Raise",
    url: "https://www.youtube.com/watch?v=5_ejbGfdAQE&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=1",
    axis: "",
  },
  {
    id: 167,
    muscleGroupId: 10,
    name: "Dumbbell Stiff Legged Deadlift",
    url: "https://www.youtube.com/watch?v=cYKYGwcg0U8&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=2",
    axis: "",
  },
  {
    id: 168,
    muscleGroupId: 10,
    name: "Glute Ham Raise",
    url: "https://www.youtube.com/watch?v=SBGYSfoqyfU&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=3",
    axis: "",
  },
  {
    id: 169,
    muscleGroupId: 10,
    name: "High Bar Good Morning",
    url: "https://www.youtube.com/watch?v=dEJ0FTm-CEk&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=4",
    axis: "",
  },
  {
    id: 170,
    muscleGroupId: 10,
    name: "Low Bar Good Morning",
    url: "https://www.youtube.com/watch?v=mnxn-7SO9Ks&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=5",
    axis: "",
  },
  {
    id: 171,
    muscleGroupId: 10,
    name: "Lying Leg Curl",
    url: "https://www.youtube.com/watch?v=n5WDXD_mpVY&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=6",
    axis: "",
  },
  {
    id: 172,
    muscleGroupId: 10,
    name: "Seated Leg Curl",
    url: "https://www.youtube.com/watch?v=Orxowest56U&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=7",
    axis: "",
  },
  {
    id: 173,
    muscleGroupId: 10,
    name: "Single Leg Curl",
    url: "https://www.youtube.com/watch?v=N6FVnaasdq0&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=8",
    axis: "",
  },
  {
    id: 174,
    muscleGroupId: 10,
    name: "Stiff Legged Deadlift",
    url: "https://www.youtube.com/watch?v=CN_7cz3P-1U&list=PLyqKj7LwU2Rvx_O313dzJNFKPiEqRMWiV&index=9",
    axis: "",
  },
  {
    id: 175,
    muscleGroupId: 11,
    name: "Calf Machine",
    url: "https://www.youtube.com/watch?v=N3awlEyTY98&list=PLyqKj7LwU2RtQyn5wWMJbD0rCV-cSkiK3",
    axis: "",
  },
  {
    id: 176,
    muscleGroupId: 11,
    name: "Stair Calves",
    url: "https://www.youtube.com/watch?v=__qfDhdByMY&list=PLyqKj7LwU2RtQyn5wWMJbD0rCV-cSkiK3&index=5",
    axis: "",
  },
  {
    id: 177,
    muscleGroupId: 11,
    name: "Single-Leg Stair Calves",
    url: "https://www.youtube.com/watch?v=_gEx2ijsmNM&list=PLyqKj7LwU2RtQyn5wWMJbD0rCV-cSkiK3&index=3",
    axis: "",
  },
  {
    id: 178,
    muscleGroupId: 11,
    name: "Deficit Smith Machine Calves",
    url: "https://www.youtube.com/watch?v=hh5516HCu4k&list=PLyqKj7LwU2RtQyn5wWMJbD0rCV-cSkiK3&index=4",
    axis: "",
  },
  {
    id: 179,
    muscleGroupId: 11,
    name: "Leg Press Calves",
    url: "https://www.youtube.com/watch?v=KxEYX_cuesM&list=PLyqKj7LwU2RtQyn5wWMJbD0rCV-cSkiK3&index=2",
    axis: "",
  },
];

const images = [
  {
    id: 1,
    muscleGroupId: 0,
    path: "/img/chest/chest-hypertrophy.jpg",
  },
  {
    id: 2,
    muscleGroupId: 1,
    path: "/img/back/back-default.jpg",
  },
  {
    id: 3,
    muscleGroupId: 2,
    path: "/img/bicep/bicep-hypertrophy-guide.jpg",
  },
  {
    id: 4,
    muscleGroupId: 10,
    path: "/img/hamstrings/hamstrings-hypertrophy-guide.jpg",
  },
  {
    id: 5,
    muscleGroupId: 9,
    path: "/img/quads/quads-hypertrophy-guide.jpg",
  },
  {
    id: 6,
    muscleGroupId: 8,
    path: "/img/glutes/glutes-hypertrophy-guide.jpg",
  },
  {
    id: 7,
    muscleGroupId: 7,
    path: "/img/abs/abs-hypertrophy-guide.jpg",
  },
  {
    id: 8,
    muscleGroupId: 6,
    path: "/img/traps/trap-hypertrophy-guide.jpg",
  },
  {
    id: 9,
    muscleGroupId: 5,
    path: "/img/front-delts/front-delts-hypertrophy-guide.jpg",
  },
  {
    id: 10,
    muscleGroupId: 4,
    path: "/img/rear-side-delts/rear-side-delt-hypertrophy-guide.jpg",
  },
  {
    id: 11,
    muscleGroupId: 3,
    path: "/img/tricep/tricep-default.jpg",
  },
  {
    id: 12,
    muscleGroupId: 11,
    path: "/img/calves/calves-hypertrophy-guide.jpg",
  },
];

const muscleGroups = [
  {
    id: 0,
    muscle: "Chest",
    description: "Check the volume landmarks for Chest hypertrophy.",
    MV_MIN: 4,
    MV_MAX: 4,
    MEV_MIN: 6,
    MEV_MAX: 6,
    MAV_MIN: 12,
    MAV_MAX: 20,
    MRV_MIN: 22,
    MRV_MAX: 22,
    frequency: "1.5 - 3",
    article_url:
      "https://renaissanceperiodization.com/chest-training-tips-hypertrophy/",
  },
  {
    id: 1,
    muscle: "Back",
    description:
      "Dr. Mike Israetel breaks down all the important factors of building a massive back.",
    MV_MIN: 8,
    MV_MAX: 8,
    MEV_MIN: 10,
    MEV_MAX: 10,
    MAV_MIN: 14,
    MAV_MAX: 22,
    MRV_MIN: 25,
    MRV_MAX: 25,
    frequency: "2 - 4",
    article_url:
      "https://renaissanceperiodization.com/back-training-tips-hypertrophy/",
  },
  {
    id: 2,
    muscle: "Biceps",
    description: "Look at the bicep volume landmarks for hypertrophy.",
    MV_MIN: 5,
    MV_MAX: 5,
    MEV_MIN: 8,
    MEV_MAX: 8,
    MAV_MIN: 14,
    MAV_MAX: 20,
    MRV_MIN: 26,
    MRV_MAX: 26,
    frequency: "2 - 6",
    article_url:
      "https://renaissanceperiodization.com/bicep-training-tips-hypertrophy/",
  },
  {
    id: 3,
    muscle: "Triceps",
    description:
      "Dr. Mike Israetel breaks down some general guidelines to help you maximize the effectiveness of your tricep training.",
    MV_MIN: 4,
    MV_MAX: 4,
    MEV_MIN: 6,
    MEV_MAX: 6,
    MAV_MIN: 10,
    MAV_MAX: 14,
    MRV_MIN: 18,
    MRV_MAX: 18,
    frequency: "2 - 4",
    article_url:
      "https://renaissanceperiodization.com/triceps-hypertrophy-training-tips/",
  },
  {
    id: 4,
    muscle: "Rear/Side Delts",
    description:
      "Dr. Mike Israetel continues the Hypertrophy Guide series with Rear & Side Delts.",
    MV_MIN: 0,
    MV_MAX: 0,
    MEV_MIN: 8,
    MEV_MAX: 8,
    MAV_MIN: 16,
    MAV_MAX: 22,
    MRV_MIN: 26,
    MRV_MAX: 26,
    frequency: "2 - 6",
    article_url:
      "https://renaissanceperiodization.com/rearside-delt-tips-hypertrophy/",
  },
  {
    id: 5,
    muscle: "Front Delts",
    description:
      "Build bigger shoulders with these tips from Dr. Mike Israetel",
    MV_MIN: 0,
    MV_MAX: 0,
    MEV_MIN: 0,
    MEV_MAX: 0,
    MAV_MIN: 6,
    MAV_MAX: 8,
    MRV_MIN: 12,
    MRV_MAX: 12,
    frequency: "1 - 2",
    article_url:
      "https://renaissanceperiodization.com/front-delt-training-tips-hypertrophy/",
  },
  {
    id: 6,
    muscle: "Traps",
    description: "Dr. Mike Israetel welcomes you to Trap City.",
    MV_MIN: 0,
    MV_MAX: 0,
    MEV_MIN: 0,
    MEV_MAX: 0,
    MAV_MIN: 12,
    MAV_MAX: 20,
    MRV_MIN: 26,
    MRV_MAX: 26,
    frequency: "2 - 6",
    article_url:
      "https://renaissanceperiodization.com/trap-training-tips-hypertrophy/",
  },
  {
    id: 7,
    muscle: "Abs",
    description: "We continue our Hypertrophy Guide Series with Abs.",
    MV_MIN: 0,
    MV_MAX: 0,
    MEV_MIN: 0,
    MEV_MAX: 0,
    MAV_MIN: 16,
    MAV_MAX: 20,
    MRV_MIN: 25,
    MRV_MAX: 25,
    frequency: "3 - 5",
    article_url: "https://renaissanceperiodization.com/ab-training/",
  },
  {
    id: 8,
    muscle: "Glutes",
    description:
      "Cake, Peach, Booty...whatever you call it, people wanna know how to build it. Dr. Mike Israetel brings you the Glute Hypertrophy Guide.",
    MV_MIN: 0,
    MV_MAX: 0,
    MEV_MIN: 0,
    MEV_MAX: 0,
    MAV_MIN: 4,
    MAV_MAX: 12,
    MRV_MIN: 16,
    MRV_MAX: 16,
    frequency: "2 - 3",
    article_url:
      "https://renaissanceperiodization.com/glute-training-tips-hypertrophy/",
  },
  {
    id: 9,
    muscle: "Quads",
    description:
      "After learning from Dr. Mike Israetel everyone will be calling you the Quadfather.",
    MV_MIN: 6,
    MV_MAX: 6,
    MEV_MIN: 8,
    MEV_MAX: 8,
    MAV_MIN: 12,
    MAV_MAX: 18,
    MRV_MIN: 20,
    MRV_MAX: 20,
    frequency: "1.5 - 3",
    article_url:
      "https://renaissanceperiodization.com/quad-training-tips-hypertrophy/",
  },
  {
    id: 10,
    muscle: "Hamstrings",
    description:
      "Turn those Hamstrings into Pork Chords with these tips from Dr. Mike Israetel",
    MV_MIN: 4,
    MV_MAX: 4,
    MEV_MIN: 6,
    MEV_MAX: 6,
    MAV_MIN: 10,
    MAV_MAX: 16,
    MRV_MIN: 20,
    MRV_MAX: 20,
    frequency: "2 - 3",
    article_url:
      "https://renaissanceperiodization.com/hamstring-training-tips-hyprtrophy/",
  },
  {
    id: 11,
    muscle: "Calves",
    description:
      "Calves are notoriously one of the most frustrating muscles to grow but in this video, Dr. Mike Israetel will help you tackle this problematic area.",
    MV_MIN: 6,
    MV_MAX: 6,
    MEV_MIN: 8,
    MEV_MAX: 8,
    MAV_MIN: 12,
    MAV_MAX: 16,
    MRV_MIN: 20,
    MRV_MAX: 20,
    frequency: "2 - 4",
    article_url:
      "https://renaissanceperiodization.com/calves-training-tips-hypertrophy/",
  },
];

export { muscleGroups, images, excercises };
