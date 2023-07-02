import { faker } from "@faker-js/faker"
import { Product } from "../../../../react/typings/apis/api-rest-vtex-search"
import { ProductContextState } from "../../../typings/vtex.product-context/react/ProductContextProvider"


export const buildProductContextMock = (params?: Partial<ProductContextState>): ProductContextState => {
	const selectedSku = faker.string.uuid()
	return {
		"loadingItem": false,
		"product": {
			"cacheId": "kit3-valedosvinhedos-asfalto-trecho1-11km-roxo",
			"productId": "9412",
			"description": "O kit contempla um tênis Corre 3 (disponibilidade de cores e tamanhos conforme estoque), camiseta, viseira, gym sack, copo de silicone, chip e número de peito e medalha (para quem completar a prova).\r\n\r\nO produto Corre 3 será enviado no endereço cadastrado no site. O envio será feito a partir do dia 01 de junho de 2023 para inscrições feitas até essa data. Inscrições feitas a partir do dia 02 de junho 2023 seguem prazo de entrega previsto no carrinho. Os demais itens que compõem a inscrição serão entregues na retirada de kit.",
			"productName": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo",
			"productReference": "BPC435782034_3-033",
			"linkText": "kit3-valedosvinhedos-asfalto-trecho1-11km-roxo",
			"brand": "Olympikus",
			"brandId": 2000001,
			"link": "https://portal.vtexcommercestable.com.br/kit3-valedosvinhedos-asfalto-trecho1-11km-roxo/p",
			"categories": [
				"/BPC/"
			],
			"categoryId": "106",
			"priceRange": {
				"sellingPrice": {
					"highPrice": 580,
					"lowPrice": 580,
					"__typename": "PriceRange"
				},
				"listPrice": {
					"highPrice": 580,
					"lowPrice": 580,
					"__typename": "PriceRange"
				},
				"__typename": "ProductPriceRange"
			},
			"specificationGroups": [
				{
					"name": "Variações",
					"originalName": "Variações",
					"specifications": [
						{
							"name": "Trecho",
							"originalName": "Trecho",
							"values": [
								"Trecho 2 - Vale dos Vinhedos"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "KM",
							"originalName": "KM",
							"values": [
								"11KM"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "Tipo",
							"originalName": "Tipo",
							"values": [
								"Asfalto"
							],
							"__typename": "SpecificationGroupProperty"
						}
					],
					"__typename": "SpecificationGroup"
				},
				{
					"name": "Especificações de Produtos",
					"originalName": "Especificações de Produtos",
					"specifications": [
						{
							"name": "Indicado Para",
							"originalName": "Indicado Para",
							"values": [
								"Maiores de 18 anos"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "Descrição Produto Premium",
							"originalName": "Descrição Produto Premium",
							"values": [
								"{\r\n  \"aboutTennis\": {\r\n    \"descriptionSection\": {\r\n      \"text\": \"<p>O Olympikus Corre 3 é a evolução de um dos melhores tênis de corrida que a Olympikus já fez. Para dar esse salto, reunimos novamente um time de especialistas em diversas áreas para co-criar com a gente e contamos com o Laboratório de Biomecânica da USP para a realização dos testes.</p><p>Tecnologias:</p><ul><li>ELEVA PRO: Tecnologia de amortecimento que explora o limite de expansão do EVA. Proporciona máxima resposta, mantém o conforto, a durabilidade e garante menor deformação.</li><li>REFLETIVO: Tecnologia com propriedades refletivas que aumentam a visibilidade e trazem mais segurança para a sua corrida noturna ou em locais com pouca iluminação.</li><li>GRIPPER E GRIPPER PLUS: Borracha antiderrapante localizada no solado. Proporciona maior aderência, segurança nas suas passadas e também maior resistência à abrasão.</li><li>NOVA PALMILHA PERFURADA RESPIRÁVEL: A palmilha é feita de EVA e conta com uma novidade: ela é projetada com perfuros para o escoamento de água ou suor. Ainda mais leve e respirável.</li><li> OXITEC: Tecnologia localizada no cabedal, com uma nova composição de fios, integrando monofilamento, poliéster e elastano. Proporciona ainda mais leveza, conforto térmico e impede a absorção de água ou suor.</li><li>PASSADORES EXTRA: Para impedir o deslocamento da lingueta durante a corrida, acrescentamos dois passadores em suas laterais, além do passador central.</li><li>MELHOR AJUSTE AOS PÉS: Para melhorar o ajuste ao pé na parte frontal, diminuímos a circunferência da forma e estreitamos a abertura da vista, proporcionando um melhor calce.DROP DE 8MM</li><ul>\"\r\n    },\r\n    \"page\": {\r\n      \"sectionOne\": {\r\n        \"image\": {\r\n          \"src\": \"/arquivos/bpc-aboutTennis-banner-hero.jpg\",\r\n          \"srcMobile\": \"/arquivos/bpc-aboutTennis-banner-hero.jpg\",\r\n          \"link\": \"#\"\r\n        }\r\n      },\r\n      \"sectionTwo\": {\r\n        \"boxOne\": {\r\n          \"backgroundColor\": \"#730080\",\r\n          \"text\": {\r\n            \"title\": \"Feito por corredores brasileiros\",\r\n            \"color\": \"#FF6600\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"backgroundColor\": \"#FF6600\",\r\n          \"text\": {\r\n            \"description\": \"O Olympikus Corre 3 é a evolução de um dos melhores tênis de corrida que a Olympikus já fez. Para dar esse salto, reunimos novamente um time de especialistas em diversas áreas para co-criar com a gente. Tudo isso para atingir um único objetivo: fazer o seu corre evoluir junto.\",\r\n            \"color\": \"#fff\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionThree\": {\r\n        \"boxOne\": {\r\n          \"video\": {\r\n            \"src\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionFour\": {\r\n        \"boxOne\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/bpc-aboutTennis-sectionFour_banner.jpg\",\r\n            \"srcMobile\": \"/arquivos/bpc-aboutTennis-sectionFour_banner.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionFive\": {\r\n        \"boxOne\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionFive.boxTwo_image_2.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionFive.boxTwo_image_2.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionFive.boxTwo_image.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionFive.boxTwo_image.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionSix\": {\r\n        \"boxOne\": {\r\n          \"backgroundColor\": \"#730080\",\r\n          \"text\": {\r\n            \"description\": \"CONFORTO E <br/>PERFORMANCE\",\r\n            \"disclaimer\": \"Trouxemos inovações que vão oferecer um equilíbrio ainda maior entre conforto e performance.\",\r\n            \"color\": \"#75F74C\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionSix.boxTwo_image.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionSix.boxTwo_image.jpg\",\r\n            \"link\": \"#\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\r\n\r\n  \"aboutTheTest\": {\r\n    \"warnings\": [\r\n      {\r\n        \"title\": \"BPC Vale dos Vinhedos\",\r\n        \"description\": \"Como o próprio nome da região diz, estamos no Vale dos Vinhedos, e como todo vale, existem montanhas, e com isso, temos um percurso com bastante altimetria, mas o visual vale a pena. As provas passam por vinícolas, parreirais, sítios e bairros da região, muito bem organizados e bonitos. A prova de 11K faz o retorno no Belvedere do Portal de Monte Belo e volta em direção a Bento Gonçalves e a Miolo. A prova de 21km segue passando por Monte Belo, e segue por cima da montanha até o retorno. Na volta dos 21k os atletas passam pelo centro de Monte Belo, na praça da Igreja Padre José Ferlin e seguem pela estrada municipal voltando em direção a Bento Gonçalves. A nossa chegada é dentro da Miolo no topo de uma montanha com visual de 360º.<br/ >A prova de 11k soma 400m de subida acumulada, e a prova de 21 km tem 720m de subida acumulada.\",\r\n        \"isFull\": true\r\n      },\r\n      {\r\n        \"title\": \"Horário e local da largada\",\r\n        \"description\": \"<span>Largada asfalto: 06h </span><br /><span>Largada trilha: 08h</span>\"\r\n      },\r\n      {\r\n        \"title\": \"Retirada de Kit\",\r\n        \"description\": \"<span>Dia: 17/11/2023 (sexta-feira)</span><br /><span>Horário: 10h às 20h</span>\"\r\n      },\r\n      {\r\n        \"title\": \"Idade de participação do evento\",\r\n        \"description\": \"<span>5km: idade mínima de 12 anos, com autorização dos responsáveis.</span><br /><span>11km: idade mínima de 16 anos, com autorização dos responsáveis.</span><br /><span>21km: idade mínima de 18 anos.</span>\"\r\n      }\r\n    ],\r\n    \"bannerFooter\": {\r\n      \"src\": \"/arquivos/bpc_aboutTheTest_banner_footer.jpg\",\r\n      \"srcMobile\": \"/arquivos/bpc_aboutTheTest_banner_footer.jpg\",\r\n      \"link\": \"\"\r\n    }\r\n  }\r\n}"
							],
							"__typename": "SpecificationGroupProperty"
						}
					],
					"__typename": "SpecificationGroup"
				},
				{
					"name": "allSpecifications",
					"originalName": "allSpecifications",
					"specifications": [
						{
							"name": "Trecho",
							"originalName": "Trecho",
							"values": [
								"Trecho 2 - Vale dos Vinhedos"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "KM",
							"originalName": "KM",
							"values": [
								"11KM"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "Tipo",
							"originalName": "Tipo",
							"values": [
								"Asfalto"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "Indicado Para",
							"originalName": "Indicado Para",
							"values": [
								"Maiores de 18 anos"
							],
							"__typename": "SpecificationGroupProperty"
						},
						{
							"name": "Descrição Produto Premium",
							"originalName": "Descrição Produto Premium",
							"values": [
								"{\r\n  \"aboutTennis\": {\r\n    \"descriptionSection\": {\r\n      \"text\": \"<p>O Olympikus Corre 3 é a evolução de um dos melhores tênis de corrida que a Olympikus já fez. Para dar esse salto, reunimos novamente um time de especialistas em diversas áreas para co-criar com a gente e contamos com o Laboratório de Biomecânica da USP para a realização dos testes.</p><p>Tecnologias:</p><ul><li>ELEVA PRO: Tecnologia de amortecimento que explora o limite de expansão do EVA. Proporciona máxima resposta, mantém o conforto, a durabilidade e garante menor deformação.</li><li>REFLETIVO: Tecnologia com propriedades refletivas que aumentam a visibilidade e trazem mais segurança para a sua corrida noturna ou em locais com pouca iluminação.</li><li>GRIPPER E GRIPPER PLUS: Borracha antiderrapante localizada no solado. Proporciona maior aderência, segurança nas suas passadas e também maior resistência à abrasão.</li><li>NOVA PALMILHA PERFURADA RESPIRÁVEL: A palmilha é feita de EVA e conta com uma novidade: ela é projetada com perfuros para o escoamento de água ou suor. Ainda mais leve e respirável.</li><li> OXITEC: Tecnologia localizada no cabedal, com uma nova composição de fios, integrando monofilamento, poliéster e elastano. Proporciona ainda mais leveza, conforto térmico e impede a absorção de água ou suor.</li><li>PASSADORES EXTRA: Para impedir o deslocamento da lingueta durante a corrida, acrescentamos dois passadores em suas laterais, além do passador central.</li><li>MELHOR AJUSTE AOS PÉS: Para melhorar o ajuste ao pé na parte frontal, diminuímos a circunferência da forma e estreitamos a abertura da vista, proporcionando um melhor calce.DROP DE 8MM</li><ul>\"\r\n    },\r\n    \"page\": {\r\n      \"sectionOne\": {\r\n        \"image\": {\r\n          \"src\": \"/arquivos/bpc-aboutTennis-banner-hero.jpg\",\r\n          \"srcMobile\": \"/arquivos/bpc-aboutTennis-banner-hero.jpg\",\r\n          \"link\": \"#\"\r\n        }\r\n      },\r\n      \"sectionTwo\": {\r\n        \"boxOne\": {\r\n          \"backgroundColor\": \"#730080\",\r\n          \"text\": {\r\n            \"title\": \"Feito por corredores brasileiros\",\r\n            \"color\": \"#FF6600\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"backgroundColor\": \"#FF6600\",\r\n          \"text\": {\r\n            \"description\": \"O Olympikus Corre 3 é a evolução de um dos melhores tênis de corrida que a Olympikus já fez. Para dar esse salto, reunimos novamente um time de especialistas em diversas áreas para co-criar com a gente. Tudo isso para atingir um único objetivo: fazer o seu corre evoluir junto.\",\r\n            \"color\": \"#fff\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionThree\": {\r\n        \"boxOne\": {\r\n          \"video\": {\r\n            \"src\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionFour\": {\r\n        \"boxOne\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/bpc-aboutTennis-sectionFour_banner.jpg\",\r\n            \"srcMobile\": \"/arquivos/bpc-aboutTennis-sectionFour_banner.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionFive\": {\r\n        \"boxOne\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionFive.boxTwo_image_2.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionFive.boxTwo_image_2.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionFive.boxTwo_image.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionFive.boxTwo_image.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionSix\": {\r\n        \"boxOne\": {\r\n          \"backgroundColor\": \"#730080\",\r\n          \"text\": {\r\n            \"description\": \"CONFORTO E <br/>PERFORMANCE\",\r\n            \"disclaimer\": \"Trouxemos inovações que vão oferecer um equilíbrio ainda maior entre conforto e performance.\",\r\n            \"color\": \"#75F74C\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionSix.boxTwo_image.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionSix.boxTwo_image.jpg\",\r\n            \"link\": \"#\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\r\n\r\n  \"aboutTheTest\": {\r\n    \"warnings\": [\r\n      {\r\n        \"title\": \"BPC Vale dos Vinhedos\",\r\n        \"description\": \"Como o próprio nome da região diz, estamos no Vale dos Vinhedos, e como todo vale, existem montanhas, e com isso, temos um percurso com bastante altimetria, mas o visual vale a pena. As provas passam por vinícolas, parreirais, sítios e bairros da região, muito bem organizados e bonitos. A prova de 11K faz o retorno no Belvedere do Portal de Monte Belo e volta em direção a Bento Gonçalves e a Miolo. A prova de 21km segue passando por Monte Belo, e segue por cima da montanha até o retorno. Na volta dos 21k os atletas passam pelo centro de Monte Belo, na praça da Igreja Padre José Ferlin e seguem pela estrada municipal voltando em direção a Bento Gonçalves. A nossa chegada é dentro da Miolo no topo de uma montanha com visual de 360º.<br/ >A prova de 11k soma 400m de subida acumulada, e a prova de 21 km tem 720m de subida acumulada.\",\r\n        \"isFull\": true\r\n      },\r\n      {\r\n        \"title\": \"Horário e local da largada\",\r\n        \"description\": \"<span>Largada asfalto: 06h </span><br /><span>Largada trilha: 08h</span>\"\r\n      },\r\n      {\r\n        \"title\": \"Retirada de Kit\",\r\n        \"description\": \"<span>Dia: 17/11/2023 (sexta-feira)</span><br /><span>Horário: 10h às 20h</span>\"\r\n      },\r\n      {\r\n        \"title\": \"Idade de participação do evento\",\r\n        \"description\": \"<span>5km: idade mínima de 12 anos, com autorização dos responsáveis.</span><br /><span>11km: idade mínima de 16 anos, com autorização dos responsáveis.</span><br /><span>21km: idade mínima de 18 anos.</span>\"\r\n      }\r\n    ],\r\n    \"bannerFooter\": {\r\n      \"src\": \"/arquivos/bpc_aboutTheTest_banner_footer.jpg\",\r\n      \"srcMobile\": \"/arquivos/bpc_aboutTheTest_banner_footer.jpg\",\r\n      \"link\": \"\"\r\n    }\r\n  }\r\n}"
							],
							"__typename": "SpecificationGroupProperty"
						}
					],
					"__typename": "SpecificationGroup"
				}
			],
			"skuSpecifications": [
				{
					"field": {
						"name": "Cor",
						"originalName": "Cor",
						"__typename": "SKUSpecificationField"
					},
					"values": [
						{
							"name": "Roxo",
							"originalName": "Roxo",
							"__typename": "SKUSpecificationValue"
						}
					],
					"__typename": "SkuSpecification"
				},
				{
					"field": {
						"name": "Tamanho",
						"originalName": "Tamanho",
						"__typename": "SKUSpecificationField"
					},
					"values": [
						{
							"name": "34",
							"originalName": "34",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "35",
							"originalName": "35",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "36",
							"originalName": "36",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "37",
							"originalName": "37",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "38",
							"originalName": "38",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "39",
							"originalName": "39",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "40",
							"originalName": "40",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "41",
							"originalName": "41",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "42",
							"originalName": "42",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "43",
							"originalName": "43",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "44",
							"originalName": "44",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "45",
							"originalName": "45",
							"__typename": "SKUSpecificationValue"
						},
						{
							"name": "46",
							"originalName": "46",
							"__typename": "SKUSpecificationValue"
						}
					],
					"__typename": "SkuSpecification"
				}
			],
			"productClusters": [
				{
					"id": "729",
					"name": "BPC-2023",
					"__typename": "ProductClusters"
				},
				{
					"id": "732",
					"name": "(MKT) Coleção Kit BPC",
					"__typename": "ProductClusters"
				},
				{
					"id": "820",
					"name": "(MKTP) reprocessar Produtos Meli",
					"__typename": "ProductClusters"
				},
				{
					"id": "824",
					"name": "(MKT) Kit Vale dos Vinhedos - Asfalto",
					"__typename": "ProductClusters"
				}
			],
			"clusterHighlights": [],
			"properties": [
				{
					"name": "Trecho",
					"values": [
						"Trecho 2 - Vale dos Vinhedos"
					],
					"__typename": "Property"
				},
				{
					"name": "KM",
					"values": [
						"11KM"
					],
					"__typename": "Property"
				},
				{
					"name": "Tipo",
					"values": [
						"Asfalto"
					],
					"__typename": "Property"
				},
				{
					"name": "Indicado Para",
					"values": [
						"Maiores de 18 anos"
					],
					"__typename": "Property"
				},
				{
					"name": "Descrição Produto Premium",
					"values": [
						"{\r\n  \"aboutTennis\": {\r\n    \"descriptionSection\": {\r\n      \"text\": \"<p>O Olympikus Corre 3 é a evolução de um dos melhores tênis de corrida que a Olympikus já fez. Para dar esse salto, reunimos novamente um time de especialistas em diversas áreas para co-criar com a gente e contamos com o Laboratório de Biomecânica da USP para a realização dos testes.</p><p>Tecnologias:</p><ul><li>ELEVA PRO: Tecnologia de amortecimento que explora o limite de expansão do EVA. Proporciona máxima resposta, mantém o conforto, a durabilidade e garante menor deformação.</li><li>REFLETIVO: Tecnologia com propriedades refletivas que aumentam a visibilidade e trazem mais segurança para a sua corrida noturna ou em locais com pouca iluminação.</li><li>GRIPPER E GRIPPER PLUS: Borracha antiderrapante localizada no solado. Proporciona maior aderência, segurança nas suas passadas e também maior resistência à abrasão.</li><li>NOVA PALMILHA PERFURADA RESPIRÁVEL: A palmilha é feita de EVA e conta com uma novidade: ela é projetada com perfuros para o escoamento de água ou suor. Ainda mais leve e respirável.</li><li> OXITEC: Tecnologia localizada no cabedal, com uma nova composição de fios, integrando monofilamento, poliéster e elastano. Proporciona ainda mais leveza, conforto térmico e impede a absorção de água ou suor.</li><li>PASSADORES EXTRA: Para impedir o deslocamento da lingueta durante a corrida, acrescentamos dois passadores em suas laterais, além do passador central.</li><li>MELHOR AJUSTE AOS PÉS: Para melhorar o ajuste ao pé na parte frontal, diminuímos a circunferência da forma e estreitamos a abertura da vista, proporcionando um melhor calce.DROP DE 8MM</li><ul>\"\r\n    },\r\n    \"page\": {\r\n      \"sectionOne\": {\r\n        \"image\": {\r\n          \"src\": \"/arquivos/bpc-aboutTennis-banner-hero.jpg\",\r\n          \"srcMobile\": \"/arquivos/bpc-aboutTennis-banner-hero.jpg\",\r\n          \"link\": \"#\"\r\n        }\r\n      },\r\n      \"sectionTwo\": {\r\n        \"boxOne\": {\r\n          \"backgroundColor\": \"#730080\",\r\n          \"text\": {\r\n            \"title\": \"Feito por corredores brasileiros\",\r\n            \"color\": \"#FF6600\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"backgroundColor\": \"#FF6600\",\r\n          \"text\": {\r\n            \"description\": \"O Olympikus Corre 3 é a evolução de um dos melhores tênis de corrida que a Olympikus já fez. Para dar esse salto, reunimos novamente um time de especialistas em diversas áreas para co-criar com a gente. Tudo isso para atingir um único objetivo: fazer o seu corre evoluir junto.\",\r\n            \"color\": \"#fff\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionThree\": {\r\n        \"boxOne\": {\r\n          \"video\": {\r\n            \"src\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionFour\": {\r\n        \"boxOne\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/bpc-aboutTennis-sectionFour_banner.jpg\",\r\n            \"srcMobile\": \"/arquivos/bpc-aboutTennis-sectionFour_banner.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionFive\": {\r\n        \"boxOne\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionFive.boxTwo_image_2.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionFive.boxTwo_image_2.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionFive.boxTwo_image.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionFive.boxTwo_image.jpg\",\r\n            \"link\": \"\"\r\n          }\r\n        }\r\n      },\r\n      \"sectionSix\": {\r\n        \"boxOne\": {\r\n          \"backgroundColor\": \"#730080\",\r\n          \"text\": {\r\n            \"description\": \"CONFORTO E <br/>PERFORMANCE\",\r\n            \"disclaimer\": \"Trouxemos inovações que vão oferecer um equilíbrio ainda maior entre conforto e performance.\",\r\n            \"color\": \"#75F74C\"\r\n          }\r\n        },\r\n        \"boxTwo\": {\r\n          \"image\": {\r\n            \"src\": \"/arquivos/sectionSix.boxTwo_image.jpg\",\r\n            \"srcMobile\": \"/arquivos/sectionSix.boxTwo_image.jpg\",\r\n            \"link\": \"#\"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  },\r\n\r\n  \"aboutTheTest\": {\r\n    \"warnings\": [\r\n      {\r\n        \"title\": \"BPC Vale dos Vinhedos\",\r\n        \"description\": \"Como o próprio nome da região diz, estamos no Vale dos Vinhedos, e como todo vale, existem montanhas, e com isso, temos um percurso com bastante altimetria, mas o visual vale a pena. As provas passam por vinícolas, parreirais, sítios e bairros da região, muito bem organizados e bonitos. A prova de 11K faz o retorno no Belvedere do Portal de Monte Belo e volta em direção a Bento Gonçalves e a Miolo. A prova de 21km segue passando por Monte Belo, e segue por cima da montanha até o retorno. Na volta dos 21k os atletas passam pelo centro de Monte Belo, na praça da Igreja Padre José Ferlin e seguem pela estrada municipal voltando em direção a Bento Gonçalves. A nossa chegada é dentro da Miolo no topo de uma montanha com visual de 360º.<br/ >A prova de 11k soma 400m de subida acumulada, e a prova de 21 km tem 720m de subida acumulada.\",\r\n        \"isFull\": true\r\n      },\r\n      {\r\n        \"title\": \"Horário e local da largada\",\r\n        \"description\": \"<span>Largada asfalto: 06h </span><br /><span>Largada trilha: 08h</span>\"\r\n      },\r\n      {\r\n        \"title\": \"Retirada de Kit\",\r\n        \"description\": \"<span>Dia: 17/11/2023 (sexta-feira)</span><br /><span>Horário: 10h às 20h</span>\"\r\n      },\r\n      {\r\n        \"title\": \"Idade de participação do evento\",\r\n        \"description\": \"<span>5km: idade mínima de 12 anos, com autorização dos responsáveis.</span><br /><span>11km: idade mínima de 16 anos, com autorização dos responsáveis.</span><br /><span>21km: idade mínima de 18 anos.</span>\"\r\n      }\r\n    ],\r\n    \"bannerFooter\": {\r\n      \"src\": \"/arquivos/bpc_aboutTheTest_banner_footer.jpg\",\r\n      \"srcMobile\": \"/arquivos/bpc_aboutTheTest_banner_footer.jpg\",\r\n      \"link\": \"\"\r\n    }\r\n  }\r\n}"
					],
					"__typename": "Property"
				}
			],
			"__typename": "Product",
			"titleTag": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo",
			"metaTagDescription": "KIT3-ValedosVinhedos-Asfalto-Trecho1-11km-Roxo",
			"items": [
				{
					"itemId": faker.string.uuid(),
					"name": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo 34",
					"nameComplete": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo 34",
					"complementName": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo",
					"ean": "",
					"variations": [
						{
							"name": "Cor",
							"values": [
								"Roxo"
							],
							"__typename": "Property"
						},
						{
							"name": "Tamanho",
							"values": [
								"34"
							],
							"__typename": "Property"
						}
					],
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "BPC435782034_3-033-34-11",
							"__typename": "Reference"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"__typename": "SKU",
					"videos": [],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Olympikus",
							"sellerDefault": true,
							"__typename": "Seller",
							"addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=54438&qty=1&seller=1&sc=1&price=58000&cv=8A6F3F2059F94EA4A16FE701A0CA3EAE_&sc=1",
							"commertialOffer": {
								"discountHighlights": [],
								"teasers": [],
								"Price": 580,
								"ListPrice": 580,
								"Tax": 0,
								"taxPercentage": 0,
								"spotPrice": 580,
								"PriceWithoutDiscount": 580,
								"RewardValue": 0,
								"PriceValidUntil": "4000-01-01T03:00:00Z",
								"AvailableQuantity": 4,
								"__typename": "Offer",
								"CacheVersionUsedToCallCheckout": "8A6F3F2059F94EA4A16FE701A0CA3EAE_"
							}
						}
					],
					"attachments": [
						{
							"id": "3",
							"name": "email",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "4",
							"name": "NomedoCorredor",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "5",
							"name": "DatadeNascimento",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "6",
							"name": "CPF",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "7",
							"name": "TamanhodaCamiseta",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "9",
							"name": "Telefone",
							"required": false,
							"__typename": "Attachment"
						}
					],
					"estimatedDateArrival": null
				},
				{
					"itemId": selectedSku,
					"name": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo 35",
					"nameComplete": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo 35",
					"complementName": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo",
					"ean": "",
					"variations": [
						{
							"name": "Cor",
							"values": [
								"Roxo"
							],
							"__typename": "Property"
						},
						{
							"name": "Tamanho",
							"values": [
								"35"
							],
							"__typename": "Property"
						}
					],
					"referenceId": [
						{
							"Key": "RefId",
							"Value": "BPC435782034_3-033-35-11",
							"__typename": "Reference"
						}
					],
					"measurementUnit": "un",
					"unitMultiplier": 1,
					"__typename": "SKU",
					"videos": [],
					"sellers": [
						{
							"sellerId": "1",
							"sellerName": "Olympikus",
							"sellerDefault": true,
							"__typename": "Seller",
							"addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=54439&qty=1&seller=1&sc=1&price=58000&cv=8A6F3F2059F94EA4A16FE701A0CA3EAE_&sc=1",
							"commertialOffer": {
								"discountHighlights": [],
								"teasers": [],
								"Price": 580,
								"ListPrice": 580,
								"Tax": 0,
								"taxPercentage": 0,
								"spotPrice": 580,
								"PriceWithoutDiscount": 580,
								"RewardValue": 0,
								"PriceValidUntil": "4000-01-01T03:00:00Z",
								"AvailableQuantity": 34,
								"__typename": "Offer",
								"CacheVersionUsedToCallCheckout": "8A6F3F2059F94EA4A16FE701A0CA3EAE_",
							}
						}
					],
					"attachments": [
						{
							"id": "3",
							"name": "email",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "4",
							"name": "NomedoCorredor",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "5",
							"name": "DatadeNascimento",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "6",
							"name": "CPF",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "7",
							"name": "TamanhodaCamiseta",
							"required": true,
							"__typename": "Attachment"
						},
						{
							"id": "9",
							"name": "Telefone",
							"required": false,
							"__typename": "Attachment"
						}
					],
					"estimatedDateArrival": null
				}
			],
			"benefits": [],
			"categoryTree": [
				{
					"id": 106,
					"name": "BPC",
					"href": "/bpc",
					"__typename": "Category"
				}
			]
		},
		"selectedItem": {
			"itemId": selectedSku,
			"name": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo 34",
			"nameComplete": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo 34",
			"complementName": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Roxo",
			"ean": "",
			"variations": [
				{
					"name": "Cor",
					"values": [
						"Roxo"
					],
					"__typename": "Property"
				},
				{
					"name": "Tamanho",
					"values": [
						"34"
					],
					"__typename": "Property"
				}
			],
			"referenceId": [
				{
					"Key": "RefId",
					"Value": "BPC435782034_3-033-34-11",
					"__typename": "Reference"
				}
			],
			"measurementUnit": "un",
			"unitMultiplier": 1,

			"__typename": "SKU",
			"videos": [],
			"sellers": [
				{
					"sellerId": "1",
					"sellerName": "Olympikus",
					"sellerDefault": true,
					"__typename": "Seller",
					"addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=54438&qty=1&seller=1&sc=1&price=58000&cv=8A6F3F2059F94EA4A16FE701A0CA3EAE_&sc=1",
					"commertialOffer": {
						"discountHighlights": [],
						"teasers": [],
						"Price": 580,
						"ListPrice": 580,
						"Tax": 0,
						"taxPercentage": 0,
						"spotPrice": 580,
						"PriceWithoutDiscount": 580,
						"RewardValue": 0,
						"PriceValidUntil": "4000-01-01T03:00:00Z",
						"AvailableQuantity": 4,
						"__typename": "Offer",
						"CacheVersionUsedToCallCheckout": "8A6F3F2059F94EA4A16FE701A0CA3EAE_"
					}
				}
			],
			"kitItems": [
				{
					"itemId": "49655",
					"amount": 1,
					"product": {
						"productName": "Tênis Olympikus Corre 3 Unissex",
						"productId": "8215",
						"description": "A franquia que revolucionou nossa categoria de Corrida, chega a sua terceira edição, ainda mais leve, com 210g. Com o desafio de evoluir o produto, o desenvolvimento do Corre 3 contou novamente com um time de especialistas e o apoio do Laboratório de Biomecânica da USP para os testes. Seu solado tem 8mm de drop e possui a tecnologia de amortecimento Eleva Pro, que garante máxima resposta, mantendo o conforto e a durabilidade. Possui também a tecnologia Gripper e Gripper Plus, uma borracha antiderrapante, de alta resistência à abrasão, que proporciona aderência ao solo, dando mais segurança às passadas. O cabedal é desenvolvido com a tecnologia Oxitec 2.0 bicolor, com uma nova composição de fios, integrando monofilamento, elastano e poliéster em sua estrutura, tornando-se ainda mais leve, respirável e com maior conforto térmico. Para melhorar o ajuste ao pé, diminuímos na parte frontal a circunferência da forma e estreitamos a abertura da vista, proporcionando um melhor calce. Para impedir o deslocamento da lingueta durante a corrida, acrescentamos dois passadores em suas laterais, além do passador central. O transfer refletivo no puxador traseiro, garante a segurança na corrida noturna. Sua palmilha é plana e em EVA para evitar a absorção de líquidos com tecido de poliéster respirável e tem furos para reduzir o peso.",
						"linkText": "tenis-olympikus-corre-3-unissex-43578203-3-033",
						"categoryTree": [
							{
								"id": 2,
								"name": "Masculino",
								"href": "/masculino",
								"__typename": "Category"
							},
							{
								"id": 9,
								"name": "Tênis",
								"href": "/masculino/tenis",
								"__typename": "Category"
							},
							{
								"id": 29,
								"name": "Corrida",
								"href": "/masculino/tenis/corrida",
								"__typename": "Category"
							}
						],
						"categoryId": "29",
						"brand": "Olympikus",
						"properties": null,
						"__typename": "OnlyProduct"
					},
					"sku": {
						"itemId": "49655",
						"name": "Tênis Olympikus Corre 3 Unissex",
						"referenceId": [
							{
								"Key": "RefId",
								"Value": "43578203_3-033-34",
								"__typename": "Reference"
							}
						],
						"sellers": [
							{
								"sellerId": "1",
								"sellerName": "Olympikus",
								"sellerDefault": true,
								"__typename": "Seller",
								"addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=49655&qty=1&seller=1&sc=1&price=49999&cv=1077FF39E3B44D7CB390E499EAE7D324_&sc=1",
								"commertialOffer": {
									"discountHighlights": [],
									"teasers": [],
									"Price": 499.99,
									"ListPrice": 499.99,
									"Tax": 0,
									"taxPercentage": 0,
									"spotPrice": 499.99,
									"PriceWithoutDiscount": 499.99,
									"RewardValue": 0,
									"PriceValidUntil": "2024-06-30T13:00:11Z",
									"AvailableQuantity": 4,
									"__typename": "Offer",
									"Installments": [
										{
											"Value": 49.99,
											"InterestRate": 0,
											"TotalValuePlusInterestRate": 499.99,
											"NumberOfInstallments": 10,
											"Name": "American Express 10 vezes sem juros",
											"PaymentSystemName": "American Express",
											"__typename": "Installment"
										}
									]
								}
							}
						],
						"__typename": "SKU"
					},
					"__typename": "KitItem"
				}
			],
			"attachments": [
				{
					"id": "3",
					"name": "email",
					"required": true,
					"__typename": "Attachment"
				},
				{
					"id": "4",
					"name": "NomedoCorredor",
					"required": true,
					"__typename": "Attachment"
				},
				{
					"id": "5",
					"name": "DatadeNascimento",
					"required": true,
					"__typename": "Attachment"
				},
				{
					"id": "6",
					"name": "CPF",
					"required": true,
					"__typename": "Attachment"
				},
				{
					"id": "7",
					"name": "TamanhodaCamiseta",
					"required": true,
					"__typename": "Attachment"
				},
				{
					"id": "9",
					"name": "Telefone",
					"required": false,
					"__typename": "Attachment"
				}
			],
			"estimatedDateArrival": null
		},
		"selectedQuantity": 1,
		"skuSelector": {
			"selectedImageVariationSKU": null,
			"isVisible": false,
			"areAllVariationsSelected": true
		},
		"buyButton": {
			"clicked": false
		},
		"assemblyOptions": {
			"items": {},
			"inputValues": {},
			"areGroupsValid": {}
		},
		...params
	} as ProductContextState
}

export const buildProductApiRestVtexSearch = (params?: Partial<Product>): Product => {
	return {
		"productId": faker.string.uuid(),
		"productName": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Preto Amarelo",
		"brand": "Olympikus",
		"brandId": 2000001,
		"brandImageUrl": null,
		"linkText": "kit3-valedosvinhedos-asfalto-trecho1-11km-pretoamarelo",
		"productReference": "BPC435782034_3-111",
		"productReferenceCode": "BPC435782034_3-111",
		"categoryId": "106",
		"productTitle": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Preto Amarelo",
		"metaTagDescription": "KIT3-ValedosVinhedos-Asfalto-Trecho1-11km-PretoAmarelo",
		"releaseDate": "2023-01-01T00:00:00Z",
		"clusterHighlights": {},
		"productClusters": {
			// @ts-ignore
			"729": "BPC-2023",
			"732": "(MKT) Coleção Kit BPC",
			"820": "(MKTP) reprocessar Produtos Meli",
			"824": "(MKT) Kit Vale dos Vinhedos - Asfalto"
		},
		"searchableClusters": {
			// @ts-ignore
			"820": "(MKTP) reprocessar Produtos Meli"
		},
		"categories": [
			"/BPC/"
		],
		"categoriesIds": [
			"/106/"
		],
		"link": "https://arthurdev--olympikusio.myvtex.com/kit3-valedosvinhedos-asfalto-trecho1-11km-pretoamarelo/p",
		"Trecho": [
			"Trecho 2 - Vale dos Vinhedos"
		],
		"KM": [
			"11KM"
		],
		"Tipo": [
			"Asfalto"
		],
		"Variações": [
			"Trecho",
			"KM",
			"Tipo"
		],
		"Indicado Para": [
			"Maiores de 18 anos"
		],
		"Especificações de Produtos": [
			"Indicado Para",
			"Descrição Produto Premium"
		],
		"allSpecifications": [
			"Trecho",
			"KM",
			"Tipo",
			"Indicado Para",
			"Descrição Produto Premium"
		],
		"allSpecificationsGroups": [
			"Variações",
			"Especificações de Produtos"
		],
		"description": "O kit contempla um tênis Corre 3 (disponibilidade de cores e tamanhos conforme estoque), camiseta, viseira, gym sack, copo de silicone, chip e número de peito e medalha (para quem completar a prova).\r\n\r\nO produto Corre 3 será enviado no endereço cadastrado no site. O envio será feito a partir do dia 01 de junho de 2023 para inscrições feitas até essa data. Inscrições feitas a partir do dia 02 de junho 2023 seguem prazo de entrega previsto no carrinho. Os demais itens que compõem a inscrição serão entregues na retirada de kit.",
		"items": [
			{
				"itemId": faker.string.uuid(),
				"name": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Preto Amarelo 34",
				"nameComplete": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Preto Amarelo 34",
				"complementName": "KIT 3 - Vale dos Vinhedos - Asfalto #Trecho 1 - 11km - Preto Amarelo",
				"ean": "",
				"referenceId": [
					{
						"Key": "RefId",
						"Value": "BPC435782034_3-111-34-11"
					}
				],
				"measurementUnit": "un",
				"unitMultiplier": 1,
				"modalType": null,
				"isKit": true,

				"Cor": [
					"Preto e Amarelo"
				],
				"Tamanho": [
					"34"
				],
				"variations": [
					"Cor",
					"Tamanho"
				],
				"attachments": [
					{
						"id": 3,
						"name": "email",
						"required": true,
						"domainValues": "[{\"FieldName\":\"email\",\"MaxCaracters\":\"100\",\"DomainValues\":\"\"}]"
					},
					{
						"id": 4,
						"name": "NomedoCorredor",
						"required": true,
						"domainValues": "[{\"FieldName\":\"NomedoCorredor\",\"MaxCaracters\":\"100\",\"DomainValues\":\"\"}]"
					},
					{
						"id": 5,
						"name": "DatadeNascimento",
						"required": true,
						"domainValues": "[{\"FieldName\":\"DatadeNascimento\",\"MaxCaracters\":\"10\",\"DomainValues\":\"\"}]"
					},
					{
						"id": 6,
						"name": "CPF",
						"required": true,
						"domainValues": "[{\"FieldName\":\"CPF\",\"MaxCaracters\":\"14\",\"DomainValues\":\"\"}]"
					},
					{
						"id": 7,
						"name": "TamanhodaCamiseta",
						"required": true,
						"domainValues": "[{\"FieldName\":\"TamanhodaCamiseta\",\"MaxCaracters\":\"10\",\"DomainValues\":\"\"}]"
					},
					{
						"id": 9,
						"name": "Telefone",
						"required": false,
						"domainValues": "[]"
					}
				],
				"sellers": [
					{
						"sellerId": "1",
						"sellerName": "Olympikus",
						"addToCartLink": "https://arthurdev--olympikusio.myvtex.com/checkout/cart/add?sku=54464&qty=1&seller=1&sc=1&price=58000&cv=D6387B4A98644B11B9EC5B14028D6B5A_&sc=1",
						"sellerDefault": true,
						// @ts-ignore
						"commertialOffer": {
							"DeliverySlaSamplesPerRegion": {
								"0": {
									"DeliverySlaPerTypes": [],
									"Region": null
								}
							},
							"DiscountHighLight": [],
							"GiftSkuIds": [],
							"Teasers": [],
							"PromotionTeasers": [],
							"BuyTogether": [],
							"Price": 580,
							"ListPrice": 580,
							"PriceWithoutDiscount": 580,
							"RewardValue": 0,
							"PriceValidUntil": "4000-01-01T03:00:00Z",
							"AvailableQuantity": 2,
							"IsAvailable": true,
							"Tax": 0,
							"DeliverySlaSamples": [
								{
									"DeliverySlaPerTypes": [],
									"Region": null
								}
							],
							"GetInfoErrorMessage": null,
							"CacheVersionUsedToCallCheckout": "D6387B4A98644B11B9EC5B14028D6B5A_",
						}
					}
				],
				"Videos": [],
				"estimatedDateArrival": null
			}

		],
		"skuSpecifications": [
			{
				"field": {
					"id": 24,
					"name": "Cor",
					"isActive": true,
					"position": 1,
					"type": "Combo"
				},
				"values": [
					{
						"id": "100",
						"name": "Preto e Amarelo",
						"position": 281
					}
				]
			},
			{
				"field": {
					"id": 25,
					"name": "Tamanho",
					"isActive": true,
					"position": 2,
					"type": "Radio"
				},
				"values": [
					{
						"id": "132",
						"name": "34",
						"position": 28
					},
					{
						"id": "131",
						"name": "35",
						"position": 35
					},
					{
						"id": "130",
						"name": "36",
						"position": 40
					},
					{
						"id": "129",
						"name": "37",
						"position": 46
					},
					{
						"id": "128",
						"name": "38",
						"position": 50
					},
					{
						"id": "127",
						"name": "39",
						"position": 56
					},
					{
						"id": "126",
						"name": "40",
						"position": 65
					},
					{
						"id": "124",
						"name": "41",
						"position": 69
					},
					{
						"id": "123",
						"name": "42",
						"position": 73
					},
					{
						"id": "121",
						"name": "43",
						"position": 77
					},
					{
						"id": "120",
						"name": "44",
						"position": 82
					},
					{
						"id": "118",
						"name": "45",
						"position": 84
					},
					{
						"id": "116",
						"name": "46",
						"position": 86
					}
				]
			}
		],

		...params
	} as Product
}