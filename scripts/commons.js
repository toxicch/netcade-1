const deepPath = document.getElementsByClassName("navbar")[0].classList.contains("deeppath");

document.getElementsByClassName("navbar")[0].innerHTML = `<a href="${deepPath ? "../" : ""}index.html"><img src="${deepPath ? "../" : ""}assets/logo.png" width=45 height=45 style="position: relative; top: 8px; left: 20px;"/><span class="navtitle" style="position: relative; left: 35px;">Netcade</span></a>
		<div class="navlist" style="display: inline; position: relative; left: 60px;">
			<a href="${deepPath ? "../" : ""}gamelibrary.html"><div class="navitem"><span class="navitem">Game Library</span></div></a>
			<a href="${deepPath ? "../" : ""}tools.html"><div class="navitem"><span class="navitem">Web Tools</span></div></a>
			<a href="${deepPath ? "../" : ""}cinema.html"><div class="navitem"><span class="navitem">Cinema</span></div></a>
			<!-- <div class="navitem"><span class="navitem">Community</span></div> -->
		</div>`;

document.getElementsByClassName("footer")[0].innerHTML = `<span class="footeritem" style="font-weight: 600;">by wintrcat</span><a href="${deepPath ? "../" : ""}privacy.html"><span class="footeritem">Privacy Policy</span></a>`;