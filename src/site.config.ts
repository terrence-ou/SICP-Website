export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Contents",
    path: "/contents/",
  },
  {
    title: "Info",
    path: "/info/",
  },
];

interface ResourceType {
  amazon: string;
  mit: string;
}

interface BookCollectionType {
  [key: string]: ResourceType;
}

export const bookLinks: BookCollectionType = {
  sicp: {
    amazon:
      "https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871/ref=sr_1_2?crid=17VRBC924CYNB&dib=eyJ2IjoiMSJ9.yvDe9vTEM9IbNsPJnH-SMQRsOaw-1QQ6wrB__8naI72FK5tMRol2qrEFIUW4VB4ChKLYmITOoKn1zalgMQoDiP_R1qICkv-PGUO_7fXAg5SAbYIc4SmF_SDj-qhNMcntCvrgYUlOBcTrEZJDqY8QTBdFpw5ylwwZJFJmsgdcnoElDD2TV_Zv_tR2_TqT1NyGAHk0f51eYbNRp60Ai5jNS2mln86lftHb1LbZmtvv9fA.AoDdGCaAA5MTFG-rgFyXIH8HrSiJ-97iC5CG-mhriaQ&dib_tag=se&keywords=sicp+book&qid=1711047267&sprefix=sicp+book%2Caps%2C160&sr=8-2",
    mit: "https://mitpress.mit.edu/9780262510875/structure-and-interpretation-of-computer-programs/",
  },
  sicpjs: {
    amazon:
      "https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262543230/ref=sr_1_1?crid=3B2X0OX5NHFHA&dib=eyJ2IjoiMSJ9.p0VanBSY-iFVIu9-R_ZRAmrCeOzhCrydi5wELtCkawwwHpc2-Ui1dMMB_mXEreQb3KHfB5wubMclOE_H1pJowWcn4AHt6yDPQK_WP-O7DgMg32ZIhYzS2VrxkOPn9NzFiVOqrWBWeHnB8yb6Gs2J5Q.DjWhwpZ-3mX-tmX9B_SE_n1bfjzyNyexGzQYhLHRHUc&dib_tag=se&keywords=sicp+javascript+book&qid=1711047873&sprefix=sicp+javascript+book%2Caps%2C128&sr=8-1",
    mit: "https://mitpress.mit.edu/9780262543231/structure-and-interpretation-of-computer-programs/",
  },
};
