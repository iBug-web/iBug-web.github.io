" File: $HOME/.vimrc
" Made by iBug
" 23:00, Nov 5, 2017
" Minimal Vim RC file

set nocompatible
set showcmd nonumber ruler background=dark
set showmatch
set autoindent smartindent
set tabstop=4 shiftwidth=4 softtabstop=0 smarttab noexpandtab
set wrapscan ignorecase incsearch hlsearch
set whichwrap+=<,>
set backspace=2 laststatus=2
"set foldenable foldmethod=manual
set noautoread nobackup noswapfile confirm
"set noerrorbell
set magic iskeyword+=_
"set mouse=a selection=exclusive selectmode=mouse,key
syntax on

cmap <C-A> ggVGY
map <C-S> :w<CR>
imap <C-S> <Esc>:w<CR>a
map <C-W> :q<CR>
imap <C-W> <Esc>:q<CR>

filetype on
filetype indent on
filetype plugin on
filetype plugin indent on

if @% =~ ".vimrc"
	set number
endif
autocmd FileType md set expandtab
autocmd FileType c,h,cpp,hpp,sh,py set number
autocmd FileType c,cpp map <F9> <Esc>:w<CR>:call GccCompile()<CR>
autocmd FileType c,cpp map <F10> <Esc>:w<CR>:call RunProgram()<CR>
autocmd FileType c,cpp map <F11> <Esc>:w<CR>:call GccCompile()<CR>:call RunProgram()<CR>
autocmd FileType sh,py map <F11> <Esc>:w<CR>:call RunScript()<CR>
autocmd BufNewFile *.[ch],*.[ch]pp exec ":call CAddFileInfo()"

func! CAddFileInfo()
	call setline(1, "// File: ".expand("%:t"))
	call append(line("."), "// Author: iBug")
	call append(line(".")+1, "")
	normal G
endfunc

func! GccCompile()
	exec "w"
	if &filetype == "c"
		exec "silent !echo \"gcc % -o %< -O3 -s\""
		exec "!gcc % -o %< -O3 -s"
	elseif &filetype == "cpp"
		exec "silent !echo \"g++ % -o %< -O3 -s\""
		exec "!g++ % -o %< -O3 -s"
	endif
endfunc

func! RunProgram()
	exec "! ./%<"
endfunc

func! RunScript()
	exec "! ./%"
endfunc
