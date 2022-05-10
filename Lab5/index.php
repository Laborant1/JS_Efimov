<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>MINATRON</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles/style.css">
</head>

<body>
	<header class="header">
		<div class="container">
			<div class="logo" onclick="window.location.href = '/';">
				<div class="logo__img">
				</div>

				<div class="logo__name">
					MINATRON
				</div>
			</div>
		</div>
	</header>

	<main class="main">
		<div class="container">
			<div class="game__place">
				<div class="score__list">
					<div class="score__list-item">
						<strong>SCORE:</strong>&nbsp;<span id="score">0</span>
					</div>

					<div class="time">
						<span class="minutes">0</span>:<span class="seconds">30</span>
					</div>

					<div class="score__list-item">
						<strong>RECORD:</strong>&nbsp;<span id="record">0</span>
					</div>
				</div>

				<div id="game">
				</div>

				<div class="restart__btn">
					<button class="btn" id="restart">RESTART</button>
				</div>
			</div>
		</div>
	</main>

	<footer class="footer">
		<div class="container">

		</div>
	</footer>

	<script src="scripts/jquery-3.6.0.min.js"></script>
	<script src="scripts/main.js"></script>
</body>

</html>