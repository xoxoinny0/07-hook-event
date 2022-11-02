/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 */

/** 패키지 참조 */
import React from 'react';

// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
        <Helmet>
        <meta charset='utf-8' />
        <title>{props.title}</title>
        {/* SEO 태그 */}
        <meta name='description' content={props.description}/>
        <meta name='keywords' content={props.keywords}/>                
        <meta name='author' content={props.author}/>
        <meta name='subject' content={props.subject}/>
        <meta name='copyright' content={props.copyright}/>
        <meta name='content-language' content="ko"/>
        <meta property='og:type' content={'website'}/>              
        <meta property='og:title' content={'props.title'}/>                
        <meta property='og:description' content={'props.description'}/>                
        <meta property='og:url' content={'props.url'}/>                
        <meta property='og:image' content={'props.image'}/>            
        <link rel="icon" href={props.icon} type="image/png" />
        <link rel="shortcut icon" href={props.shrotcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
        {/* 구글 웹폰트 적용 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet" />
        </Helmet>
    </HelmetProvider>
  );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author :string, description: string, title: string, url: string}}
 */

Meta.defaultProps = {
    title: 'React Example',
    description: 'React.js 과제06입니다.',
    keywords: 'React',
    author: 'Yoo JiIn',
    subject: 'React.js Frontend Programming',
    copyright: 'Yoo JiIn',
    keywords: 'React',
    url: window.location.href,
    image: null,
    icon: null,
    shrotcutIcon : null,
    appleTouchIcon: null,
};

export default Meta;