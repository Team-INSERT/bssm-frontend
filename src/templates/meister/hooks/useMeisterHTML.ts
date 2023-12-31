import { theme } from "@/styles";

export const useMeisterHTML = () => {
  const getBasicJobSkills = (html: string) => {
    return [
      {
        title: "의사소통 국어",
        value: +html.substring(
          html.lastIndexOf("의사소통(국어) : ") + 11,
          html.lastIndexOf("의사소통(국어) : ") + 12,
        ),
        status: theme.primary_blue,
      },
      {
        title: "의사소통 영어",
        value: +html.substring(
          html.lastIndexOf("의사소통(영어) : ") + 11,
          html.lastIndexOf("의사소통(영어) : ") + 12,
        ),
        status: theme.primary_mint,
      },
      {
        title: "수리 활용",
        value: +html.substring(
          html.lastIndexOf("수리활용 : ") + 7,
          html.lastIndexOf("수리활용 : ") + 8,
        ),
        status: theme.primary_red,
      },
      {
        title: "문제 해결",
        value: +html.substring(
          html.lastIndexOf("문제해결 : ") + 7,
          html.lastIndexOf("문제해결 : ") + 8,
        ),
        status: theme.primary_yellow,
      },
    ];
  };

  const scoreParser = (html: string) => {
    const parsedHTML = html;
    return (
      parsedHTML
        .replaceAll(
          '<div>[ <span style="font-weight:bold; color:blue;">',
          (match) => {
            return `<section class="list-item">${match}`;
          },
        )
        .replace(/\[ (\d{4}-\d{2}-\d{2}) \]/g, (match) => {
          return `<br>
          <hgroup class="section-date">
          ${match
            .replaceAll("[ ", "")
            .replaceAll(" ]", "")
            .replace("-", "년 ")
            .replace("-", "월 ")}일</hgroup></section>`;
        })
        .replaceAll("- 시도와 전국은 중복부여 안함", "")
        .replace(/[①-⑮].*?: -<br>/gi, "")
        .replace(/[①-⑮].*?: -/gi, "")
        .replace(/\([^)]*\)/gi, "")
        .replace(/총점\s+([\d.]+)\s*점/gi, (match) => {
          return `<span class="total-score-item">${match}</span>`;
        })
        .replace(/ \d+ 점/gi, (match) => {
          return `<span class="item-score" >${match.replaceAll(
            " ",
            "",
          )}</span>`;
        })
        .replaceAll(
          '[ <span style="font-weight:bold; color:red;">종합</span> ]',
          "",
        )
        .replaceAll(",", "")
        .replaceAll("font-weight:bold; color:blue;", "")
        .replaceAll(
          '⑥ 헌혈 : <span style="font-weight:bold;">0 점</span> ( 총 :  시간 )<br>',
          "",
        )
        .replaceAll(
          '⑧ 스포츠관련 행사 : <span style="font-weight:bold;"> 점</span> ( 총 : 0 건 )<br>',
          "",
        )
        .replaceAll(
          '⑬ 직업관련 교육 : <span style="font-weight:bold;"> 점</span> ( 총 : 0 건 )<br>',
          "",
        )
        .replaceAll(
          '⑪ 체육/음악 관련 대회 : <span style="font-weight:bold;">0 점</span> - 시도와 전국은 중복부여 안함 (최고 득점 1개만 적용)<br>',
          "",
        )
        .replaceAll("font-weight:bold;", "")
        .replaceAll(
          '⑪ 체육/음악 관련 대회 : <span style="font-weight:bold;"> 점</span> - 시도와 전국은 중복부여 안함 (최고 득점 1개만 적용)<br>',
          "",
        )
        .replace(/[①-⑮]/gi, "")
        // .replaceAll(":", "·")
        .replaceAll(
          '[ <span style="font-weight:bold; color:red;">종합</span> ]',
          "",
        )
        .replaceAll(":  점", ": 0점")
        .replaceAll(": 점", ": 0점")
        .replaceAll("\n", "")
        .replaceAll("\t", "")
        .replaceAll("  ", "")
    );
  };

  const pointParser = (html: string) => {
    return html

      .replaceAll("\n", "")
      .replaceAll("\t", "")
      .replaceAll("상점내용 : ", ``)
      .replaceAll("벌점내용 : ", ``)
      .replaceAll("`", "")
      .replaceAll(
        "(상점 : ",
        `\n<span style="font-size: 20px !important; font-weight: 600 !important;">상점 `,
      )
      .replaceAll(
        "(벌점 : ",
        `\n<span style="font-size: 20px !important; font-weight: 600 !important;">벌점 `,
      )
      .replaceAll("점)", "점</span>")
      .replaceAll("부여일 : ", "20")
      .replace(/상\d{2}-/gi, "")
      .replace(/기숙사\d{2}-/gi, "")
      .replace(/학교\d{2}-/gi, "")
      .replace(/\(([^)]*선생님[^)]*)\)/gi, "$1")
      .replace(/\([^)]*\)/gi, "");
  };

  return { getBasicJobSkills, scoreParser, pointParser };
};

export default useMeisterHTML;
