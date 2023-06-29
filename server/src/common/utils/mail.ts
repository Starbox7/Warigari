import * as nodemailer from 'nodemailer';

const _sendMail = async (to: string, subject: string, html: string) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    html: html,
  });
};

export const sendAuthenticationMail = async (to: string) => {
  return await _sendMail(
    to,
    `[와리가리] 회원가입 인증 요청`,
    `<div>
			<p>회원가입 인증 요청 메일입니다.</p>
			<a href='http://localhost:3000/auth/signup?email=${to}'>인증하러가기</a>
		</div>`,
  );
};

// https://velog.io/@sssua0928/NodeJS-nodemailer-%EB%AA%A8%EB%93%88-%EB%B3%B4%EC%95%88%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
