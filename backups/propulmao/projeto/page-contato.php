<?php
/**
 *
 * Template Name: Contato
 *
 * @package understrap
 */

get_header();

?>

<div>
	Contato

	<section class="container page-contato">
		<form onsubmit="console.log('olas')">
			<div class="form-row form-group flex-column flex-sm-row">
				<div class="col  p-0">
					<label for="name">Nome</label>
					<input class="form-control form-control-lg" required name="name" id="name" placeholder="Nome" type="text" />
				</div>
				<div class="col  p-0">
					<label for="phone">Telefone</label>
					<input class="form-control form-control-lg" required name="phone" id="phone" placeholder="Telefone"
						type="text" />

				</div>
			</div>

			<div class="form-row form-group flex-column flex-sm-row">
				<div class="col  p-0">
					<label for="email">E-Mail</label>
					<input class="form-control form-control-lg" required name="email" id="email" placeholder="E-mail"
						type="text" />
				</div>

				<div class="col p-0">
					<label for="subject">Assunto</label>
					<select class="form-control form-control-lg" name="subject" id="subject">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</div>

			<div class="form-row form-group flex-column flex-sm-row">
				<div class="col  p-0">
					<label for="message">Mensagem</label>
					<textarea class="form-control form-control-lg" name="message" id="message" rows="4"></textarea>
				</div>
			</div>

			<div class=" d-flex flex-sm-row flex-column btn-group ">
				<button type="button" class="btn btn-outline-secondary col ">
					limpar
				</button>

				<button type="submit" class="btn btn-primary col ">
					enviar
				</button>
			</div>

		</form>
	</section>
</div>

<?php get_footer(); ?>
