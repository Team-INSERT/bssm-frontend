import { color } from "@/_styles";

// 심신미약자나 노약자, 임산부, 유아는 코드를 읽는 것을 삼가하기바람

export const useMeisterHTML = () => {
  const getBasicJobSkills = (html: string) => {
    return [
      {
        title: "의사소통 국어",
        value: +html.substring(
          html.lastIndexOf("의사소통(국어) : ") + 11,
          html.lastIndexOf("의사소통(국어) : ") + 12,
        ),
        status: color.primary_blue,
      },
      {
        title: "의사소통 영어",
        value: +html.substring(
          html.lastIndexOf("의사소통(영어) : ") + 11,
          html.lastIndexOf("의사소통(영어) : ") + 12,
        ),
        status: color.primary_mint,
      },
      {
        title: "수리 활용",
        value: +html.substring(
          html.lastIndexOf("수리활용 : ") + 7,
          html.lastIndexOf("수리활용 : ") + 8,
        ),
        status: color.primary_red,
      },
      {
        title: "문제 해결",
        value: +html.substring(
          html.lastIndexOf("문제해결 : ") + 7,
          html.lastIndexOf("문제해결 : ") + 8,
        ),
        status: color.primary_yellow,
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
    return html.replaceAll(
      'style="border:1px solid #ccc;margin-bottom:10px;border-radius:3px;padding:10px;box-shadow: 2px 2px 1px 2px #ddd;"',
      "",
    );
  };

  return { getBasicJobSkills, scoreParser, pointParser };
};
