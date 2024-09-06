import Kickstart from "@assets/kickstart-icon.svg";
import Onboard from "@assets/onboard-icon.svg";
import Engage from "@assets/engage-icon.svg";
import AnnaOlsen from "@assets/Anna_Olsen.svg";
import DillonKydd from "@assets/Dillon_Kydd.svg";
import KasMoss from "@assets/Kas_Moss.svg";
import JassirJonis from "@assets/Jassir_Jonis.svg";
import JasonKwon from "@assets/Jason_Kwon.svg";
import AlexRose from "@assets/Alex_Rose.svg";
import LizzieUlrich from "@assets/Lizzie_Ulrich.svg";
import Star from "@assets/star.svg";

export const CONTENT_INFO_BLOCK_1 = {
  img: Kickstart,
  title: "Compartilhe esse desafio com seus fundadores",
  content:
    "Estamos no início e você acabou de ter uma longa conversa com  amigos para um desafio significativo pelo qual todos são apaixonados e têm uma solução potencial. Você está pronto para embarcar na jornada dessa startup.",
};

export const CONTENT_INFO_CARD_1 = {
  title: "Members",
  members: [
    {
      img: DillonKydd,
      member: "Dillon Kydd",
      shares: "100 SHARES",
    },
    {
      img: AnnaOlsen,
      member: "Anna Olsen",
      shares: "100 SHARES",
    },
    {
      img: KasMoss,
      member: "Kas Moss",
      shares: "100 SHARES",
    },
  ],
};

export const CONTENT_INFO_BLOCK_2 = {
  img: Onboard,
  title:
    "A bordo estarão usuários, investidores e conselheiros à medida do crescimento da ideia",
  content:
    "Você já iniciou o projeto e entregou um MVP, e alguns investidores e conselheiros estão interessados em conversar com você. Como um ZCex, você pode integrá-los de forma fluida à sua organização digital e alinhá-los ao seu sucesso.",
};

export const CONTENT_INFO_CARD_2 = {
  investorImg: JassirJonis,
  investorTitle: "Jassir Jonis",
  subtitle: "Pre-seed angel investor",
  investorContent:
    "Hey guys, love what you're doing and I'm convinced that together we'll achieve amazing things.",
  commit: "COMMIT",
  commitValue: "10,000 DAI",
  shares: "SHARES",
  numShares: "20",
  voteBtn: "Go to vote",
  voteBtnStyle: "vote__btn",
};

export const CONTENT_INFO_BLOCK_3 = {
  img: Engage,
  title: "Obtenha engajamento de colaboradores extremamente comprometidos",
  content:
    "Você precisa de pessoas talentosas sob demanda para diversas tarefas que uma equipe em tempo integral não pode priorizar de imediato. Com o ZCex, você pode facilmente financiar as tarefas e ter pessoas se candidatando para trabalhar nelas em troca de fundos ou ações.",
};

export const CONTENT_INFO_CARD_3_A = {
  articleTitle: "Write a how-to on ZCex",
  articleContent:
    "Looking for an amazing copywriter using ZCex to help us write an article on how to get started.",
  shareBtn: "1 SHARE",
};

export const CONTENT_INFO_CARD_3_B = {
  applicantsTitle: "3 applicants",
  starImg: Star,
  profileBtn: "View profile",
};

export const CONTENT_INFO_CARD_3_APPLICANTS = [
  {
    applicantImg: JasonKwon,
    applicantRole: "Front-end Developer",
    member: "Jason Kwon",
    stars: 4.8,
    applicantCommits: "6 commits",
  },
  {
    applicantImg: AlexRose,
    member: "Alex Rose",
    applicantRole: "UX Writer",
    stars: 4.5,
    applicantCommits: "4 commits",
  },
  {
    applicantImg: LizzieUlrich,
    member: "LizzieUlrich",
    applicantRole: "Game Design",
    stars: 4.2,
    applicantCommits: "2 commits",
  },
];
