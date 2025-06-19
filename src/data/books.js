import catAndMoon from "../assets/catAndMoon.jpg";
import pipiDetective from "../assets/pipiDetective.jpg";
import brownBear from "../assets/brownBear.jpg";

const books = [
  {
    id: 1,
    title: "小猫咪追月亮",
    description:
      "这是小猫咪的故事哦！有一天，它看到天上有个亮亮的圆圆的月亮，就一直追啊追，跑到树上、跳过小河，还差点掉进草丛里！小猫咪好勇敢，它真的以为可以抓到月亮呢～",
    cover: catAndMoon,
    tags: ["中文", "3岁+"],
    status: "可借",
  },
  {
    id: 2,
    title: "屁屁侦探",
    description:
      "这是屁屁侦探的故事～他是个超级厉害的侦探哦！每次有奇怪的事情发生，他都能找到线索！每次破案的时候，我都觉得他好聪明，坏蛋都被他的臭屁熏晕啦～",
    cover: pipiDetective,
    tags: ["中文", "侦探", "4岁+"],
    status: "在读",
  },
  {
    id: 3,
    title: 'Brown Bear, Brown Bear, What Do You See? (set)',
    description: "这本书好可爱呀！它讲的是一只棕色的熊走呀走，然后它看到一只红色的小鸟。然后小鸟也看到别的动物！一只动物接着一只动物，每一页都有好漂亮的颜色，还有好玩的节奏，念起来像唱歌一样！",
    cover: brownBear,
    tags: ["English", "启蒙", "3岁+"],
    status: "在读",
  },
];

export default books;