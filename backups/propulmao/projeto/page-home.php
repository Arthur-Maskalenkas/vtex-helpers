<?php
/**
 *
 * Template Name: Homepage
 *
 * @package understrap
 */

get_header();

?>

<section class="pp-hero">
	<!-- Slider main container -->
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
	</div>

</section>
<section class="pp-about-us">
	<div class="container">
		<div class="pp-section-title">
			<div class="pp-section-title-main">
				<h2>Sobre <span>Nós</span></h2>
			</div>
			<div class="pp-section-title-sub">
				<h3>Conheça nosso</h3>
				<span>Programa</span>
			</div>
		</div>
		<?php echo get_sub_field('medical_specialtie') ?>
		<div class="pp-about-us-image">
			<img src="<?php echo get_field('about_us_image') ?>" alt="Banner Sobre Nós">
		</div>
		<div class="pp-about-us-summary">
			<div>
				<h5>
					<?php echo get_field('about_us_header') ?>
				</h5>
				<p>
					<?php echo get_field('about_us_text') ?>
				</p>
				<a href="<?php echo get_field('about_us_href') ?>" class="btn btn-primary">Leia mais sobre nosso projeto</a>
			</div>
		</div>
	</div>
</section>
<section class="pp-truck">
	<div section class="pp-truck-map">
		<div>
			<div>
				icon
				<h5>Onde estivemos</h5>
			</div>
			<div>
				icon
				<h5>Onde estamos</h5>
			</div>
			<div>
				icon
				<h5>Onde estaremos</h5>
			</div>
		</div>
		<a href="#" class="btn btn-primary">Agende seu Exame de Tomografia Gratuito </a>
	</div>
</section>
<section class="pp-who-make">
	<div class="container">
		<div class="pp-section-title">
			<div class="pp-section-title-main">
				<h2>QUEM <span>FAZ</span></h2>
			</div>
			<div class="pp-section-title-sub">
				<h3>Conheça os</h3>
				<span>Profissionais</span>
			</div>
		</div>
		<?php
	// Check rows exists.
	if (have_rows('doctors')):
		echo '<div class="pp-home-slider-doctors">';
		// Loop through rows.
		while (have_rows('doctors')):
			the_row();
			?>
		<div>
			<div>
				<img src="<?php echo get_sub_field('doctor_img') ?>" alt="Foto de um Médico parceiro" />
			</div>
			<h5>
				<?php echo get_sub_field('doctor_name') ?>
			</h5>
			<p>
				<?php echo get_sub_field('medical_specialtie') ?>
			</p>
			<p>
				<?php echo get_sub_field('doctor_workplace') ?>
			</p>
		</div>
		<?php
			// End loop.
		endwhile;
		echo '</div>';
		?>
		<?php
		// No value.
	else:
		// No rows found
	endif;
	?>

		<h4>Médicos parceiros:</h4>

		<?php
	// Check rows exists.
	if (have_rows('doctors_partners')):
	echo '<div class="pp-home-slider-doctors">';
		// Loop through rows.
		while (have_rows('doctors_partners')):
			the_row();
			?>
		<div>
			<div>
				<img src="<?php echo get_sub_field('doctor_img') ?>" alt="Foto de um Médico parceiro" />
			</div>
			<h5>
				<?php echo get_sub_field('doctor_name') ?>
			</h5>
		</div>
		<?php
			// End loop.
		endwhile;
		echo '</div>';
		?>
		<?php
		// No value.
	else:
		// No rows found
	endif;
	?>
	</div>

</section>
<section class="pp-about-cancer">
	<div class="pp-about-cancer-summary">
		<div>
			<h5>Nossa História</h5>
			<p>Presente em vários estados brasileiros, o programa PROPULMÃO é uma rede de médicos e profissionais de
				saúde
				focados em conscientizar, prevenir e tratar a população, fumante ou não, sobre o câncer de pulmão. Todos
				os
				anos, o projeto realiza uma série de eventos em todo o Brasil, como palestras e consultorias regionais,
				para
				interessados em parar de fumar e seus familiares e pessoas que queiram prevenir ou tratar a doença.</p>
			<a href="#" class="btn btn-primary">Leia mais</a>
		</div>
	</div>
	<div class="pp-about-cancer-image">
		<img src="https://via.placeholder.com/500x500" alt="">
	</div>
</section>
<section class="pp-newsletter">
	<div class="container">
		<div class="pp-newsletter-background d-none  d-xl-block">
			<img src="<?php echo get_template_directory_uri(); ?>/imgs/pulmao-image.jpg" alt="Imagem Pulmão" />
		</div>
		<div class="pp-newsletter-contact">
			<form>
				<div class="pp-newsletter-header">
					<h2>Nossa Newsletter</h2>
					<h6>Cadastre seu melhor e-mail</h6>
				</div>
				<div class="form-group">
					<input type="text" class="form-control form-control-lg " id="formGroupExampleInput"
						placeholder="Primeiro nome">
				</div>
				<div class="form-group">
					<input type="text" class="form-control form-control-lg" id="formGroupExampleInput2"
						placeholder="Endereço de E-mail">
				</div>
				<button class="btn btn-primary w-100 btn-lg">Se Inscrever</button>
			</form>
		</div>
	</div>

</section>

<?php get_footer(); ?>
