export function authMailTemplate(nickname: string, email: string) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style='display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;'>
	<header style='font-size: 30px;
			font-weight: bold;
			border-bottom: 0.10px solid #eeeeee;
			display: flex;
			justify-content: center;
			width: 80vw;
			padding: 10px;
			box-sizing: border-box;'>
		<div>[와리가리] 회원 인증</div>
	</header>
	<main style='
			font-size: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px;
			flex-direction: column;
			width: 80vw;
			box-sizing: border-box;'>
		<div>${nickname}님,<br />
			이 이메일은 [와리가리] 서비스에 가입한 이후 발송되는 메일입니다.
			로그인을 위해 인증하시려면 아래 버튼을 눌러주세요.</div>
		<br />
		<a href='http://localhost:3000/auth/signup?email=${email}' style='
			text-decoration: none;
			background-color: #4472C4;
			color: #ffffff;
			box-sizing: border-box;
			padding: 10px 60px;
			text-align: center;
			border-radius: 8px;'>인증</a>
	</main>
	<footer style='
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.50px;
			font-weight: bold;
			width: 80vw;
			background-color: #eeeeee;
			height: 40px;'>(주)Dumchiit</footer>
</body>

</html>`;
}
