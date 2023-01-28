<?php
/**
 *
 * Template Name: Fotos
 *
 * @package understrap
 */

get_header();
?>

<div>
	Fotos
	<section class="container  page-fotos">
		<ul>
			<li class="item-article">
				<article
				">
				<h2>
					Galeria 1
				</h2>
				<p>Galeria de imagens do evento X</p>

				<div class="swiper">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
						<!-- Slides -->
						<div class="swiper-slide">Slide 1</div>
						<div class="swiper-slide">Slide 2</div>
						<div class="swiper-slide">Slide 3</div>
						...
					</div>
					<!-- If we need pagination -->
					<div class="swiper-pagination"></div>

					<!-- If we need navigation buttons -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>

					<!-- If we need scrollbar -->
					<div class="swiper-scrollbar"></div>
				</div>

				<ul class="list-images">
					<li>
						<div class="container-image">
							<div></div>
						</div>
					</li>

					<li>
						<div class="container-image">
							<div></div>
						</div>
					</li>

					<li>
						<div class="container-image">
							<div></div>
						</div>
					</li>

					<li>
						<div class="container-image">
							<div></div>
						</div>
					</li>

					<li>
						<div class="container-image">
							<div></div>
						</div>
					</li>
				</ul>
				</article>
			</li>
		</ul>
	</section>
</div>

<?php get_footer(); ?>
