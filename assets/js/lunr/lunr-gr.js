<!doctype html>
<!--
  Minimal Mistakes Jekyll Theme 4.24.0 by Michael Rose
  Copyright 2013-2020 Michael Rose - mademistakes.com | @mmistakes
  Free for personal and commercial use under the MIT license
  https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE
-->
<html lang="en" class="no-js">
	<head>
		<meta charset="utf-8">
		<!-- begin _includes/seo.html -->
		<title>iBug</title>
		<meta name="description" content="The little personal site for iBug">
		<meta name="author" content="iBug">
		<meta property="og:type" content="website">
		<meta property="og:locale" content="en_US">
		<meta property="og:site_name" content="iBug">
		<meta property="og:title" content="iBug">
		<meta property="og:url" content="https://ibug.io/assets/js/lunr/lunr-gr.js">
		<meta property="og:description" content="The little personal site for iBug">
		<meta property="og:image" content="https://ibug.io/image/og.jpg">
		<link rel="canonical" href="https://ibug.io/assets/js/lunr/lunr-gr.js">
		<script type="application/ld+json">
			{
			  "@context": "https://schema.org",

			    "@type": "Person",
			    "name": "iBug",
			    "url": "https://ibug.io/"

			}
		</script>
		<meta name="google-site-verification" content="5_jn7a-vZslUtLJO-BkY-cPDGgah5JP49RGgeOBmYSk" />
		<!-- end _includes/seo.html -->
		<link href="/feed.xml" type="application/atom+xml" rel="alternate" title="iBug Feed">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script>
			document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
		</script>
		<!-- For all browsers -->
		<link rel="stylesheet" href="/assets/css/main.css?v=b012c9d">
		<link rel="stylesheet" href="https://static.ibugone.com/fontawesome/5/css/all.min.css" media="none" onload="if(media!='all')media='all'">
		<link rel="shortcut icon" type="image/png" href="/assets/favicon.png">
		<meta name="theme-color" content="#EDEDED">
		<script>
			const funcOnPageLoad = function() { document.body.classList.add("loaded"); };
			document.addEventListener('DOMContentLoaded', funcOnPageLoad);
		</script>
	</head>
	<body class="layout--single">
		<nav class="skip-links">
			<ul>
				<li><a href="#site-nav" class="screen-reader-shortcut">Skip to primary navigation</a></li>
				<li><a href="#main" class="screen-reader-shortcut">Skip to content</a></li>
				<li><a href="#footer" class="screen-reader-shortcut">Skip to footer</a></li>
			</ul>
		</nav>
		<div class="masthead">
			<div class="masthead__inner-wrap">
				<div class="masthead__menu">
					<nav id="site-nav" class="greedy-nav">
						<a class="site-logo" href="/"><img src="/assets/favicon.png" alt="iBug"></a>
						<a class="site-title" href="/">
							iBug
						</a>
						<ul class="visible-links">
							<li class="masthead__menu-item">
								<a href="/about/">About</a>
							</li>
							<li class="masthead__menu-item">
								<a href="/blog/">Blog</a>
							</li>
							<li class="masthead__menu-item">
								<a href="/projects/">Projects</a>
							</li>
							<li class="masthead__menu-item">
								<a href="/friends/">Friends</a>
							</li>
							<li class="masthead__menu-item">
								<a href="/cn/">中文内容</a>
							</li>
						</ul>
						<button class="search__toggle" type="button">
							<span class="visually-hidden">Toggle search</span>
							<i class="fas fa-search"></i>
						</button>
						<button class="greedy-nav__toggle hidden" type="button">
							<span class="visually-hidden">Toggle menu</span>
							<div class="navicon"></div>
						</button>
						<ul class="hidden-links hidden"></ul>
					</nav>
				</div>
			</div>
		</div>
		<div class="initial-content">
			<div class="page__hero--overlay"
  style=" background-image: url('/image/header/mountain-1.jpg');"
>
				<div class="wrapper">
					<h1 id="page-title" class="page__title" itemprop="headline">
						iBug
					</h1>
				</div>
			</div>
			<div id="main" role="main">
				<div class="sidebar sticky">
					<nav class="nav__list">
						<input id="ac-toc" name="accordion-toc" type="checkbox" />
						<label for="ac-toc">Toggle menu</label>
						<ul class="nav__items">
							<li>
								<span class="nav__sub-title">iBug on the Web</span>
								<ul>
									<li><a href="/"><i class="fas fa-fw fa-home"></i> Home</a></li>
									<li><a href="/about/"><i class="fas fa-fw fa-grin-alt"></i> About iBug</a></li>
									<li><a href="/blog/"><i class="fas fa-fw fa-book"></i> Blog</a></li>
									<li><a href="/skills/"><i class="fas fa-fw fa-wrench"></i> Skills</a></li>
									<li><a href="/projects/"><i class="fas fa-fw fa-puzzle-piece"></i> Projects</a></li>
									<li><a href="https://notes.ibug.io/"><i class="fas fa-fw fa-sticky-note"></i> Notes</a></li>
									<li><a href="/bookmarks/"><i class="fas fa-fw fa-bookmark"></i> Bookmarks</a></li>
									<li><a href="/friends/"><i class="fas fa-fw fa-user-friends"></i> Friends</a></li>
									<li><a href="/cn/"><i class="fas fa-fw fa-yin-yang"></i> Chinese Content</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
				<article class="page" itemscope itemtype="https://schema.org/CreativeWork">
					<meta itemprop="dateModified" content="2022-06-11T13:47:57+00:00">
					<div class="page__inner-wrap">
						<section class="page__content" itemprop="text">
						</section>
						<footer class="page__meta">
							<p class="page__date"><strong><i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i> Updated:</strong> <time datetime="2022-06-11">Jun 11, 2022</time></p>
						</footer>
						<section class="page__share">
							<h4 class="page__share-title">Share on</h4>
							<a href="https://twitter.com/intent/tweet?text=%20https%3A%2F%2Fibug.io%2Fassets%2Fjs%2Flunr%2Flunr-gr.js" class="btn btn--twitter" onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="Share on Twitter"><i class="fab fa-fw fa-twitter" aria-hidden="true"></i><span> Twitter</span></a>
							<a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fibug.io%2Fassets%2Fjs%2Flunr%2Flunr-gr.js" class="btn btn--facebook" onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="Share on Facebook"><i class="fab fa-fw fa-facebook" aria-hidden="true"></i><span> Facebook</span></a>
							<a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fibug.io%2Fassets%2Fjs%2Flunr%2Flunr-gr.js" class="btn btn--linkedin" onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" title="Share on LinkedIn"><i class="fab fa-fw fa-linkedin" aria-hidden="true"></i><span> LinkedIn</span></a>
						</section>
					</div>
				</article>
			</div>
		</div>
		<div class="search-content">
			<div class="search-content__inner-wrap">
				<div class="search-searchbar"></div>
				<div class="search-hits"></div>
			</div>
		</div>
		<div id="footer" class="page__footer">
			<footer>
				<!-- start custom footer snippets -->
				<!-- end custom footer snippets -->
				<div class="page__footer-follow">
					<ul class="social-icons">
						<li><strong>Follow:</strong></li>
						<li><a href="https://github.com/iBug" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i> GitHub</a></li>
						<li><a href="https://stackoverflow.com/users/5958455/ibug" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-stack-overflow" aria-hidden="true"></i> Stack Overflow</a></li>
						<li><a href="/feed.xml"><i class="fas fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li>
					</ul>
				</div>
				<div class="page__footer-copyright">
					<p>&copy; 2022 iBug. Powered by <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</p>
					<p>Except when otherwise noted, content on this site is licensed under the <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 License</a>.</p>
					<p><a href="/privacy-policy">Privacy Policy</a> | <a href="/sitemap.xml">Sitemap (XML)</a></p>
					<p>
						Site version <a href="/status" class="version-text">G-711</a>
					</p>
				</div>
			</footer>
		</div>
		<script src="/assets/js/main.min.js"></script>
		<script>
			// Including InstantSearch.js library and styling
			const loadSearch = function() {
			  const loadCSS = function(src) {
			    var link = document.createElement('link');
			    link.rel = 'stylesheet';
			    link.type = 'text/css';
			    link.href = src;
			    link.media = 'all';
			    document.head.appendChild(link);
			  };

			  var script = document.createElement('script');
			  script.setAttribute("type", "text/javascript");
			  script.setAttribute("src", "https://cdn.jsdelivr.net/npm/instantsearch.js@2.3.3/dist/instantsearch.min.js");
			  script.addEventListener("load", function() {
			    // Instantiating InstantSearch.js with Algolia credentials
			    const search = instantsearch({
			      appId: '14DZKASAEJ',
			      apiKey: 'a0d8cb9da2d6ad0d17dcd40c58c72a56',
			      indexName: 'iBug_website',
			      searchParameters: {
			        restrictSearchableAttributes: ['title', 'content']
			      }
			    });

			    const hitTemplate = function(hit) {
			      const url = hit.url;
			      const title = hit._highlightResult.title.value;
			      const content = hit._highlightResult.html.value;

			      return `
			        <div class="list__item">
			          <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
			            <h2 class="archive__item-title" itemprop="headline"><a href="${url}">${title}</a></h2>
			            <div class="archive__item-excerpt" itemprop="description">${content}</div>
			          </article>
			        </div>
			      `;
			    }

			    // Adding searchbar and results widgets
			    search.addWidget(
			      instantsearch.widgets.searchBox({
			        container: '.search-searchbar',
			        poweredBy: true,
			        placeholder: 'Enter your search term...'
			      })
			    );
			    search.addWidget(
			      instantsearch.widgets.hits({
			        container: '.search-hits',
			        templates: {
			          item: hitTemplate,
			          empty: 'No results',
			        }
			      })
			    );

			    if(!search.started) {
			      search.start();
			    }
			  });
			  document.body.appendChild(script);

			  loadCSS("https://cdn.jsdelivr.net/npm/instantsearch.js@2.3.3/dist/instantsearch.min.css");
			  loadCSS("https://cdn.jsdelivr.net/npm/instantsearch.js@2.3.3/dist/instantsearch-theme-algolia.min.css");
			};

			// Starting the search only when toggle is clicked
			$(document).ready(function() {
			  var scriptLoaded = false;

			  $(".search__toggle").on("click", function() {
			    if (!scriptLoaded) {
			      loadSearch();
			      scriptLoaded = true;
			    }
			  });
			});
		</script>
		<script>
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-115907213-1']);

			_gaq.push(['_trackPageview']);

			(function() {
			  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>
	</body>
</html>