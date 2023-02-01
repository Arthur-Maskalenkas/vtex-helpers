<?php
/**
 *
 * Template Name: Homepage
 *
 * @package understrap
 */

get_header();

?>

<section class="pp-page-home-section-main-banner w-100">
	<?php
			// Check rows exists.
			if (have_rows('home_main_banners')) :
				echo '<div class="pp-home-main-banner">';
				// Loop through rows.
				while (have_rows('home_main_banners')) :
					the_row();
			?>
	<div class="pp-container-banner position-relative">
		<img src="<?php echo get_sub_field('home_main_banner_image_src') ?>" class="w-100">
		<div class="pp-container-texts position-absolute">
			<h2>
				<?php echo get_sub_field('home_main_banner_image_title') ?>
			</h2>
			<p>
				<?php echo get_sub_field('home_main_banner_image_description') ?>
			</p>

			<a class="btn pp-btn-banner" href="<?php echo get_sub_field('home_main_banner_button_href') ?>">
				<?php echo get_sub_field('home_main_banner_button_label') ?>
			</a>
		</div>
	</div>
	<?php
				// End loop.
				endwhile;
				echo '</div>';
				?>
	<?php
			// No value.
			else :
			// No rows found
			endif;
			?>
</section>
<section class="pp-about-us pp-page-home-section-about-us">
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
		<div class="pp-container-content">
			<div class="pp-container-image pp-c-container-image-effect-primary">
				<img src="<?php echo get_field('about_us_image') ?>" />
			</div>
			<div class="pp-c-container-bg-secondary">
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
<section class="container pp-truck pp-page-home-section-truck">
	<div class="pp-container-content">
		<img src="<?php echo get_template_directory_uri(); ?>/imgs/truck-image.png" class="pp-truck-image" />

		<div class="pp-right-side">
			<div class="pp-cards">

				<button class="btn pp-card" data-toggle="modal" data-target="#truckOption1">
					<img src="<?php echo get_template_directory_uri(); ?>/imgs/truck-card-1.svg" />
					<p>
						Onde<br /> estivemos
					</p>
				</button>

				<button class="btn pp-card" data-toggle="modal" data-target="#truckOption2">
					<img src="<?php echo get_template_directory_uri(); ?>/imgs/truck-card-2.svg" />
					<p>
						Onde<br /> estamos
					</p>
				</button>

				<button class="btn pp-card" data-toggle="modal" data-target="#truckOption3">
					<img src="<?php echo get_template_directory_uri(); ?>/imgs/truck-card-3.svg" />
					<p>
						Onde<br /> estaremos
					</p>
				</button>
			</div>
			<a href="<?php echo get_field('truck_exam_link') ?>" class="btn btn-outline-light">
				Agende seu Exame de Tomografia Gratuito
			</a>
		</div>
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


<div class="modal pp-modal-truck pp-c-modal fade" id="truckOption1" tabindex="-1" role="dialog"
	aria-labelledby="truckOption1" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered d-flex flex-column" role="document">

		<header class="d-flex justify-content-end w-100">
			<div class="pp-section-title">
				<div class="pp-section-title-main">
					<h2>ONDE <span>ESTIVEMOS</span></h2>
				</div>
			</div>

			<button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
				<img src="<?php echo get_template_directory_uri(); ?>/imgs/modal-close.svg" />
			</button>
		</header>
		<div class="table-responsive">
			<table class="table table-hover">
				<thead class="bg-primary">
					<tr>
						<th scope="col">DATA</th>
						<th scope="col">CIDADE</th>
						<th scope="col">DETALHES</th>
					</tr>
				</thead>
				<?php
								// Check rows exists.
								if (have_rows('truck_events_past')) :
									echo '<tbody>';
									// Loop through rows.
									while (have_rows('truck_events_past')) :
										the_row();
								?>
				<tr class="position-relative">
					<th scope="row">
						<a href="#" class="stretched-link">
							<?php echo get_sub_field('truck_event_date') ?>
						</a>
					</th>
					<td>
						<?php echo get_sub_field('truck_event_city') ?>
					</td>
					<td>
						<?php echo get_sub_field('truck_event_details') ?>
					</td>
				</tr>
				<?php
									// End loop.
									endwhile;
									echo '</tbody>';
									?>
				<?php
								// No value.
								else :
								// No rows found
								endif;
								?>
			</table>
		</div>
	</div>
</div>

<div class="modal pp-modal-truck pp-c-modal fade" id="truckOption2" tabindex="-1" role="dialog"
	aria-labelledby="truckOption2" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered d-flex flex-column" role="document">

		<header class="d-flex justify-content-end w-100">
			<div class="pp-section-title">
				<div class="pp-section-title-main">
					<h2>ONDE <span>ESTAMOS</span></h2>
				</div>
			</div>

			<button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
				<img src="<?php echo get_template_directory_uri(); ?>/imgs/modal-close.svg" />
			</button>
		</header>
		<div class="table-responsive">
			<table class="table table-hover">
				<thead class="bg-primary">
					<tr>
						<th scope="col">DATA</th>
						<th scope="col">CIDADE</th>
						<th scope="col">HORA</th>
						<th scope="col">DETALHES</th>
					</tr>
				</thead>
				<?php
								// Check rows exists.
								if (have_rows('truck_events_now')) :
									echo '<tbody>';
									// Loop through rows.
									while (have_rows('truck_events_now')) :
										the_row();
								?>
				<tr class="position-relative">
					<th scope="row">
						<a href="#" class="stretched-link">
							<?php echo get_sub_field('truck_event_date') ?>
						</a>
					</th>
					<td>
						<?php echo get_sub_field('truck_event_city') ?>
					</td>
					<td>
						<?php echo get_sub_field('truck_event_hour') ?>
					</td>
					<td>
						<?php echo get_sub_field('truck_event_details') ?>
					</td>
				</tr>
				<?php
									// End loop.
									endwhile;
									echo '</tbody>';
									?>
				<?php
								// No value.
								else :
								// No rows found
								endif;
								?>
			</table>
		</div>
	</div>
</div>

<div class="modal pp-modal-truck pp-c-modal fade" id="truckOption3" tabindex="-1" role="dialog"
	aria-labelledby="truckOption3" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered d-flex flex-column" role="document">

		<header class="d-flex justify-content-end w-100">
			<div class="pp-section-title">
				<div class="pp-section-title-main">
					<h2>ONDE <span>ESTAREMOS</span></h2>
				</div>
			</div>

			<button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
				<img src="<?php echo get_template_directory_uri(); ?>/imgs/modal-close.svg" />
			</button>
		</header>
		<div class="table-responsive">
			<table class="table table-hover">
				<thead class="bg-primary">
					<tr>
						<th scope="col">DATA</th>
						<th scope="col">CIDADE</th>
						<th scope="col">DETALHES</th>
					</tr>
				</thead>
				<?php
								// Check rows exists.
								if (have_rows('truck_events_future')) :
									echo '<tbody>';
									// Loop through rows.
									while (have_rows('truck_events_future')) :
										the_row();
								?>
				<tr class="position-relative">
					<th scope="row">
						<a href="#" class="stretched-link">
							<?php echo get_sub_field('truck_event_date') ?>
						</a>
					</th>
					<td>
						<?php echo get_sub_field('truck_event_city') ?>
					</td>

					<td>
						<?php echo get_sub_field('truck_event_details') ?>
					</td>
				</tr>
				<?php
									// End loop.
									endwhile;
									echo '</tbody>';
									?>
				<?php
								// No value.
								else :
								// No rows found
								endif;
								?>
			</table>
		</div>
	</div>
</div>

<?php get_footer(); ?>
