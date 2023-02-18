# comandos git | modificar git

git config --global --edit e faça as devidas configs


atualmente:

[user]
	name = Arthur Maskalenaks
	email = maskalenkasdoc@gmail.com
[push]
	followTags = true
[alias]
	c = !git add --all && git commit -m
	cc = !git add --all && git commit -m --no-verify 
	s = !git status -s
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
	r = !git reflog --pretty=format:'%C(blue)%h%h%C(red)%d %C(white)%gD - %C(cyan)%gs - %C(green)%cr'
	subscribe = !git pull -s recursive -X theirs master
	current = !git commit --amend --date="now" --no-edit
	amend = !git add --all && git commit --amend --no-edit
	count = !git shortlog -s --grep
	change-message = !git commit --amend -m
[credential "https://git.heroku.com"]
	provider = generic
[difftool "sourcetree"]
	cmd = '' \"$LOCAL\" \"$REMOTE\"
[mergetool "sourcetree"]
	cmd = "'' "
	trustExitCode = true
[core]
	editor = code --wait
