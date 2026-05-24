// Banco de questões — validadas (DETRAN-SP / CONTRAN 789/20)
// tag: DD = Direção Defensiva | PS = Primeiros Socorros
export const BANK = [
  // ============ DIREÇÃO DEFENSIVA ============
  {tag:"DD", q:"Os fatores que interferem positivamente para que o trânsito seja humano e seguro são:",
   opts:["Educação, habilidades, atenção, cooperação e solidariedade.","Individualismo, habilidades, atenção, cooperação e solidariedade.","Educação, egoísmo, atenção, cooperação e solidariedade.","Educação, habilidades, displicência, cooperação e solidariedade."],
   correct:0, exp:"Direção defensiva pressupõe uma postura humana e cooperativa no trânsito — educação, habilidades técnicas, atenção, cooperação e solidariedade andam juntas."},

  {tag:"DD", q:"O condutor que dirige sob efeito de bebida alcoólica:",
   opts:["Melhora a autoconfiança e torna a direção segura.","Compromete a percepção de riscos e diminui a coordenação motora.","Aumenta a coordenação motora e os reflexos essenciais para dirigir.","Melhora a visão e a percepção de riscos do entorno."],
   correct:1, exp:"O álcool é depressor do sistema nervoso central — reduz reflexos, percepção de risco e coordenação motora. É crime de trânsito, conforme o Art. 306 do CTB."},

  {tag:"DD", q:"Em uma rodovia, ao perceber movimentos na vegetação indicando forte vento lateral, o recomendável é:",
   opts:["Reduzir a velocidade, ligar a seta e transitar pelo acostamento.","Reduzir a velocidade adequando a marcha do motor para manter a estabilidade.","Acelerar, forçando maior atrito entre os pneus e a pista.","Manter a velocidade e segurar o volante levemente."],
   correct:1, exp:"Vento lateral forte desestabiliza o veículo. A resposta defensiva é reduzir a velocidade e adequar a marcha — nunca acelerar nem confiar em segurar o volante 'levemente'."},

  {tag:"DD", q:"Em vias com velocidade máxima de 60 km/h, qual a distância mínima para iniciar a sinalização de acidente ocorrido à noite, em pista molhada ou com neblina?",
   opts:["120 metros (≈120 passos).","60 metros (≈60 passos).","80 metros (≈80 passos).","40 metros (≈40 passos)."],
   correct:0, exp:"À noite ou em pista molhada/neblina, dobra-se a distância equivalente à velocidade. Em via de 60 km/h: 60×2 = 120 metros (ou ~120 passos)."},

  {tag:"DD", q:"São situações de risco que reduzem o atrito e a aderência entre os pneus e a pista, dificultando o controle nas frenagens:",
   opts:["Rodas trincadas, suspensão e amortecedores deficientes.","Neblina densa e fumaça vinda de queimadas.","Depressões, lombadas e ondulações no pavimento.","Barro em estradas de terra e lâmina de água sobre a pista pavimentada."],
   correct:3, exp:"Barro e lâmina d'água (aquaplanagem) interpõem-se entre pneu e pavimento, reduzindo drasticamente a aderência. As outras opções comprometem o veículo ou a visibilidade, não o atrito."},

  {tag:"DD", q:"A velocidade máxima permitida em rodovias de pista dupla, sem sinalização regulamentadora, para automóveis, camionetas e motocicletas, é:",
   opts:["110 km/h.","80 km/h.","90 km/h.","60 km/h."],
   correct:0, exp:"CTB, art. 61, §1º, I, 'a': em rodovias de pista dupla, 110 km/h para automóveis, camionetas e motocicletas, salvo sinalização indicando outro limite."},

  {tag:"DD", q:"Em dias de chuva, a falta de aderência do pneu com a pista molhada pode ocasionar o fenômeno da:",
   opts:["Força centrífuga.","Corrente térmica.","Corrente aerodinâmica.","Aquaplanagem."],
   correct:3, exp:"Aquaplanagem (ou hidroplanagem) é quando uma lâmina de água separa o pneu do asfalto e o veículo 'desliza'. Evita-se com velocidade reduzida e pneus em bom estado."},

  {tag:"DD", q:"Os sulcos dos pneus, cuja profundidade mínima é de 1,6 mm, existem para:",
   opts:["Escoar a água em pista molhada e manter o atrito com o pavimento.","Reduzir o volume de ruído do pneu.","Garantir a estabilidade em curvas acentuadas em alta velocidade.","Distinguir os modelos e fabricantes de pneus."],
   correct:0, exp:"Os sulcos drenam a água entre o pneu e o asfalto. Abaixo de 1,6 mm o pneu é 'careca' e o risco de aquaplanagem dispara."},

  {tag:"DD", q:"Entende-se por 'condições adversas':",
   opts:["Situações inadequadas geradas exclusivamente pelas autoridades de trânsito.","Condições pessoais do condutor ou fora do seu controle que podem ser causa de acidentes.","Condições geradoras de risco totalmente fora do controle do condutor.","Situações normais que, por distração do condutor, geram risco."],
   correct:1, exp:"Em direção defensiva, condições adversas são todas as variáveis (do condutor, do veículo, da via, do clima ou do trânsito) que aumentam o risco de acidente — algumas controláveis, outras não."},

  {tag:"DD", q:"Em direção defensiva, o elemento básico DECISÃO depende:",
   opts:["Da habilidade, tempo e prática de direção; da previsão de situações de risco; e do conhecimento das condições do veículo e da via.","Somente do tempo de experiência do condutor.","Somente das condições do veículo e da via.","Da habilidade e da experiência do condutor."],
   correct:0, exp:"A decisão correta no trânsito é multifatorial: habilidade + previsão + conhecimento do veículo e da via. Nenhum desses elementos basta sozinho."},

  {tag:"DD", q:"A distância percorrida pelo veículo desde o acionamento do freio até a parada total é chamada de:",
   opts:["Distância de percepção.","Distância de seguimento.","Distância de frenagem.","Distância de reação."],
   correct:2, exp:"Distância de frenagem = do toque no pedal até parar. Distância de reação = do ver o perigo até pisar no freio. Distância de parada = soma das duas."},

  {tag:"DD", q:"Para evitar a colisão em caso de freada brusca do veículo da frente, a ação preventiva do condutor que segue atrás é:",
   opts:["Manter distância de seguimento e frear bruscamente quando houver risco de colisão.","Manter distância apenas quando pressentir imprudência do outro.","Dirigir com atenção, independentemente da distância.","Manter distância de seguimento e estar atento para conseguir frear a tempo de evitar a colisão."],
   correct:3, exp:"Distância de seguimento + atenção contínua é a fórmula defensiva. A regra prática é dois segundos atrás do veículo da frente (mais, em chuva)."},

  {tag:"DD", q:"Ao dirigir sob neblina ou cerração, o condutor deve:",
   opts:["Usar a luz baixa do farol.","Manter a velocidade e acionar o pisca-alerta.","Usar a luz alta do farol.","Acelerar e acionar o pisca-alerta."],
   correct:0, exp:"A luz alta na neblina REFLETE nas gotículas e cega o próprio condutor. Sempre luz baixa. Pisca-alerta só com o veículo parado ou emergência real, não andando."},

  {tag:"DD", q:"A baixa calibragem dos pneus:",
   opts:["Reduz sua vida útil.","Aumenta a capacidade de frenagem.","Favorece a estabilidade em curvas.","Aumenta sua vida útil."],
   correct:0, exp:"Pneu murcho aquece, deforma, desgasta de forma irregular e consome mais combustível — vida útil cai drasticamente."},

  {tag:"DD", q:"O nível de atenção do condutor é influenciado pela fadiga, especialmente em viagens longas. Qual deve ser a atitude ao constatar esse estado?",
   opts:["Parar para descansar em local seguro, antes de prosseguir.","Reclinar o banco, esticar as pernas e continuar dirigindo.","Resistir ao cansaço e concluir a viagem antes que ocorra um acidente.","Ingerir bebidas energéticas ou café para reduzir o cansaço."],
   correct:0, exp:"Cafeína disfarça, não resolve. A única atitude segura diante da fadiga é parar e descansar em local seguro."},

  {tag:"DD", q:"Para não correr o risco de aquaplanagem, deve-se:",
   opts:["Frear com antecedência e acelerar sobre poças d'água.","Aumentar a velocidade ao trafegar sobre poças d'água.","Reduzir a velocidade e não frear ao trafegar sobre poças d'água.","Evitar frear sobre poças d'água, mantendo velocidade alta."],
   correct:2, exp:"Sobre lâmina d'água: velocidade reduzida e sem frear bruscamente. Frear na poça pode travar a roda e provocar derrapagem."},

  {tag:"DD", q:"A convivência social no trânsito é facilitada se o condutor:",
   opts:["Demonstrar agilidade no manuseio do veículo.","Conhecer o funcionamento do motor.","Entrar em atrito com outros condutores, caso julgue estar com a razão.","Conhecer e cumprir as regras de circulação e de conduta."],
   correct:3, exp:"O bom convívio depende de regras compartilhadas e cumpridas — não de habilidade técnica isolada nem de quem 'tem razão'."},

  {tag:"DD", q:"O condutor que pratica a direção defensiva é aquele que:",
   opts:["Ultrapassa veículos lentos pelo acostamento.","Mantém-se atento ao comportamento dos demais condutores e usuários do trânsito.","Desce trechos em declive com o veículo desengrenado.","Usa luz alta sob chuva."],
   correct:1, exp:"O cerne da direção defensiva é antecipar o que os outros podem fazer de errado — e isso só funciona com atenção contínua ao entorno."},

  {tag:"DD", q:"Ao se aproximar de escolas ou de vias com travessia de pedestres, o condutor deve:",
   opts:["Reduzir a velocidade e ligar o pisca-alerta.","Reduzir a velocidade apenas se a pista estiver escorregadia.","Reduzir a velocidade de forma compatível com a segurança do trânsito no local.","Manter a velocidade e seguir em frente."],
   correct:2, exp:"O CTB exige velocidade compatível com a segurança — em áreas escolares, isso significa redução significativa, e ter as duas mãos no volante (não pisca-alerta andando)."},

  {tag:"DD", q:"Para conversão à esquerda em rodovias com acostamento e sem local apropriado, o condutor deverá:",
   opts:["Entrar no acostamento, reduzir a velocidade e, sem parar, cruzar a via.","Acessar o acostamento à direita, parar o veículo e aguardar o momento seguro de cruzar a via.","Parar na pista, próximo à linha divisória, e aguardar.","Reduzir, não parar e cruzar a via aproveitando uma brecha."],
   correct:1, exp:"Para evitar colisão traseira de quem vem atrás em alta velocidade, sai-se da pista pelo acostamento à direita, espera-se a brecha e só então atravessa-se."},

  {tag:"DD", q:"O freio do tipo ABS torna mais segura a frenagem, pois:",
   opts:["Evita que a roda bloqueie e o veículo derrape.","Aplica força menor nas rodas dianteiras.","Aplica força menor nas rodas traseiras.","Bloqueia todas as rodas simultaneamente."],
   correct:0, exp:"ABS = Anti-lock Braking System. Pulsa o freio várias vezes por segundo, mantendo a roda girando — o motorista preserva direção mesmo em frenagem máxima."},

  {tag:"DD", q:"Granizo e chuva são classificados como condições adversas de:",
   opts:["Veículo.","Trânsito.","Luz.","Tempo."],
   correct:3, exp:"Em direção defensiva, fenômenos meteorológicos (chuva, granizo, neblina, vento) são condições adversas de TEMPO."},

  {tag:"DD", q:"O bom relacionamento no trânsito se deve ao:",
   opts:["Controle emocional do indivíduo e ao respeito às normas e regulamentos.","Respeito às normas e regulamentos de trânsito, apenas.","Controle emocional do indivíduo, apenas.","Controle emocional e respeito ao cidadão, apenas."],
   correct:0, exp:"Convivência saudável no trânsito exige duas coisas combinadas: regular as próprias emoções E respeitar as regras coletivas."},

  {tag:"DD", q:"Em condições de chuva intensa e diminuição de visibilidade, o condutor deve trafegar com velocidade reduzida e utilizar:",
   opts:["Os faróis de milha.","A luz baixa do farol.","O pisca-alerta acionado.","A luz alta do farol."],
   correct:1, exp:"Luz baixa em chuva — assim como na neblina. A luz alta reflete na água em suspensão e atrapalha. O pisca-alerta com o carro andando confunde os outros motoristas."},

  {tag:"DD", q:"A atitude prudente no trânsito é:",
   opts:["Agir de forma a evitar perigos ou consequências ruins para si e para os demais.","Agir com cautela ao avançar um sinal vermelho.","Agir com precaução quando não observar alguma regra de segurança.","Usar de ousadia e agressividade para se proteger de imprevisibilidades."],
   correct:0, exp:"Prudência é antecipação de risco — não compensação de imprudência. A definição inclui obrigatoriamente os 'demais usuários da via'."},

  {tag:"DD", q:"A demonstração de respeito ao pedestre é observada quando o condutor:",
   opts:["Dá prioridade ao pedestre, retendo o veículo a uma distância segura.","Avança com o veículo na direção do pedestre, pressionando-o.","Para sobre a faixa de pedestre em virtude de congestionamentos.","Usa de maneira ostensiva a buzina para pressionar os mais lentos."],
   correct:0, exp:"Pedestre tem prioridade na faixa e nas travessias. O motorista cuidadoso para com folga, dando segurança visual ao pedestre."},

  {tag:"DD", q:"Qual atitude o condutor defensivo deve ter quando o sinal luminoso 'abrir' para seu veículo e ainda existirem pedestres efetuando a travessia?",
   opts:["Buzinar alertando-os.","Iniciar o deslocamento lentamente, pois o sinal já está aberto.","Piscar os faróis e buzinar.","Aguardar que concluam a travessia."],
   correct:3, exp:"Pedestre que iniciou a travessia tem direito de concluí-la com segurança, mesmo com o sinal já verde para o motorista. Apressá-lo é imprudência grave."},

  {tag:"DD", q:"O transporte de criança em motocicleta é permitido a partir de:",
   opts:["Dez anos de idade.","Quatro anos de idade.","Seis anos de idade.","Cinco anos de idade."],
   correct:0, exp:"CTB, art. 244, II: vedado transportar criança menor de dez anos ou que não tenha condições de cuidar de sua própria segurança."},

  {tag:"DD", q:"As crianças com idade inferior a 10 anos que não tenham atingido 1,45 m devem ser transportadas:",
   opts:["No banco da frente, com o cinto de segurança.","Nos bancos traseiros, com dispositivo de retenção adequado.","No colo de um adulto no banco traseiro.","Apenas em veículos com airbag desligado."],
   correct:1, exp:"Resolução CONTRAN 819/21 e o CTB (art. 64): bancos traseiros + dispositivo adequado à idade/peso/altura (bebê conforto, cadeirinha, assento de elevação)."},

  {tag:"DD", q:"Em via com mais de uma faixa por sentido, ao observar um obstáculo à distância (ex.: um buraco), o condutor deve, considerando a possível presença de motociclistas:",
   opts:["Manter a velocidade e frear bruscamente diante do obstáculo.","Reduzir a velocidade e sinalizar com antecedência se for necessário mudar de faixa.","Aumentar a velocidade e mudar de faixa imediatamente, sem sinalizar.","Manter a velocidade e mudar de faixa imediatamente, sem sinalizar."],
   correct:1, exp:"Mudança de faixa exige seta com antecedência — motociclistas costumam circular nos corredores entre faixas e são os primeiros atingidos por manobras súbitas."},

  {tag:"DD", q:"Em uma via com várias faixas de trânsito de mesmo sentido, as faixas da esquerda são destinadas à:",
   opts:["Passagem de veículos de carga.","Passagem de motocicletas.","Ultrapassagem e ao deslocamento dos veículos de maior velocidade.","Passagem de veículos de transporte coletivo."],
   correct:2, exp:"CTB, art. 29, II: a faixa da esquerda é para os mais rápidos e ultrapassagens. Veículos mais lentos e de carga circulam pela direita."},

  {tag:"DD", q:"A velocidade máxima permitida em vias coletoras sem sinalização regulamentadora é de:",
   opts:["40 km/h.","60 km/h.","20 km/h.","30 km/h."],
   correct:1, exp:"CTB, art. 61, §1º, II, 'b': vias urbanas coletoras = 60 km/h, salvo sinalização específica."},

  {tag:"DD", q:"A velocidade mínima permitida em rodovia sinalizada com a velocidade máxima de 100 km/h é:",
   opts:["50 km/h.","60 km/h.","40 km/h.","30 km/h."],
   correct:0, exp:"CTB, art. 62: a velocidade mínima é a metade da máxima estabelecida — 100÷2 = 50 km/h. Andar muito devagar também é infração."},

  {tag:"DD", q:"O condutor contribui para o aumento da poluição quando:",
   opts:["Utiliza escapamento dentro dos padrões do fabricante.","Mantém o motor acelerado em marcha lenta esperando o semáforo abrir.","Usa a buzina apenas quando necessário.","Mantém os pneus calibrados."],
   correct:1, exp:"Acelerar o motor parado, deixar o motor ligado em parada longa, escapamento adulterado, falta de manutenção — tudo isso aumenta a emissão de poluentes."},

  {tag:"DD", q:"Em uma rodovia, para aumentar a segurança em caso de chuva, além de reduzir a velocidade, o condutor deve:",
   opts:["Aumentar a distância do veículo à frente e ligar o pisca-alerta.","Reduzir a distância do veículo à frente e acender o farol alto.","Manter distância do veículo à frente e acender o farol baixo.","Aumentar a distância do veículo à frente e acender o farol alto."],
   correct:2, exp:"Chuva = distância de seguimento mantida (ou ampliada) + farol BAIXO. Alto reflete na água, pisca-alerta andando é desorientador."},

  {tag:"DD", q:"No trecho de rodovia em declive acentuado (descida de serra), é mais seguro descer:",
   opts:["Com o câmbio engrenado em marcha reduzida, usando o freio só o necessário.","Desengrenado, para economizar combustível.","Com o pedal de freio pressionado continuamente.","Em marcha alta para evitar forçar o motor."],
   correct:0, exp:"Marcha reduzida = freio-motor. Descer 'em ponto morto' tira o controle e superaquece os freios — fadiga térmica leva à perda total de frenagem."},

  {tag:"DD", q:"A ocorrência de aquaplanagem é agravada quando:",
   opts:["A profundidade dos sulcos do pneu está abaixo do limite mínimo exigido.","O sistema de embreagem está com desgaste acentuado.","O condutor reduz a velocidade antes de poças.","O sistema de suspensão perdeu validade."],
   correct:0, exp:"Pneu careca (sulco < 1,6 mm) não consegue escoar a água — quanto menos sulco, maior a chance de o pneu 'flutuar' sobre a lâmina d'água."},

  {tag:"DD", q:"Um dos meios para evitar a poluição é:",
   opts:["Observar a vida útil dos filtros de ar e óleo.","Acelerar quando o veículo estiver parado.","Manter o motor ligado em parada prolongada.","Transitar com excesso de carga."],
   correct:0, exp:"Filtros saturados forçam o motor a queimar combustível de forma ineficiente — manutenção preventiva é também medida ambiental."},

  {tag:"DD", q:"Para maior segurança nas curvas, manobras de emergência e frenagens, os equipamentos que devem estar em boas condições são:",
   opts:["Amortecedores e pisca-alerta.","Pisca-alerta e faróis.","Suspensão e faróis.","Suspensão e amortecedores."],
   correct:3, exp:"Suspensão e amortecedores mantêm o pneu pressionado contra o solo — sem isso, perde-se aderência justamente nos momentos críticos."},

  {tag:"DD", q:"A distância percorrida do momento em que o motorista vê o perigo até a imobilização total do veículo é denominada:",
   opts:["Distância de frenagem.","Distância de parada.","Distância de seguimento.","Distância de reação."],
   correct:1, exp:"Distância de parada = distância de reação (ver→reagir) + distância de frenagem (acionar→parar). Total."},

  // ============ PRIMEIROS SOCORROS ============
  {tag:"PS", q:"As três regras fundamentais de primeiros socorros são:",
   opts:["Tranquilizar o acidentado; estimular a circulação por massagem; e atuar com rapidez.","Aquecer o acidentado com bebida quente; avaliar a situação; e conversar de forma calma.","Afastar os curiosos; telefonar para o resgate; e oferecer água.","Não entrar em pânico; pensar nas condutas a serem tomadas; e avaliar os riscos para o acidentado."],
   correct:3, exp:"Calma, planejamento e avaliação de risco. Massagem, água e bebida quente PIORAM o quadro. Esses são clássicos das pegadinhas da prova."},

  {tag:"PS", q:"A ação correta do condutor que presta primeiros socorros no local do acidente é:",
   opts:["Se for motociclista, a primeira medida é retirar o capacete.","Em hemorragia na perna, fazer imediatamente um torniquete.","Não havendo risco imediato de incêndio ou queda, não movimentar a vítima e aguardar o socorro.","Oferecer água à vítima em estado grave que reclama estar com sede."],
   correct:2, exp:"REGRA DE OURO: não mover a vítima. Movimentar pode agravar lesões na coluna. Torniquete é só último recurso, e água oferecida pode causar engasgo/aspiração."},

  {tag:"PS", q:"Quais devem ser as três primeiras providências a tomar no local de um acidente com vítimas?",
   opts:["Sinalizar o local, acionar o serviço de emergência e medicar a vítima.","Avaliar as condições gerais da vítima, sinalizar bem o local e acionar o serviço de emergência.","Acionar o serviço de emergência, sinalizar o local e remover o veículo acidentado.","Medicar a vítima, avisar os parentes e removê-la imediatamente."],
   correct:1, exp:"Avaliar → sinalizar → acionar 192 (SAMU) ou 193 (Bombeiros). Nunca medicar. Nunca remover o veículo (atrapalha perícia)."},

  {tag:"PS", q:"Em caso de acidente com vítima, em que sentido podemos dizer que primeiros socorros são:",
   opts:["As providências iniciais e temporárias, no local, até a chegada de socorro.","Procedimentos de competência exclusiva de médicos no local.","Ações que só podem ser realizadas por equipes profissionais.","O pronto atendimento da vítima em substituição às equipes de saúde."],
   correct:0, exp:"Primeiros socorros são medidas LEIGAS, IMEDIATAS e TEMPORÁRIAS. Não substituem o atendimento profissional — apenas mantêm a vítima viva até ele chegar."},

  {tag:"PS", q:"Ao solicitar o serviço de resgate para atender vítimas, o procedimento é:",
   opts:["Informar a localização e adiantar o atendimento liberando vias aéreas.","Isolar a área e fazer mutirão com os demais condutores.","Informar o tipo de acidente e retirar imediatamente a vítima.","Informar a identificação do solicitante, a localização, o estado das vítimas e o tipo de acidente."],
   correct:3, exp:"O atendente do 192/193 precisa de quatro informações para decidir os recursos a enviar: quem chama, onde, o que aconteceu e como está(ão) a(s) vítima(s)."},

  {tag:"PS", q:"O melhor local do corpo para verificar a pulsação de uma vítima adulta inconsciente é:",
   opts:["A perna.","O pulso.","O peito.","O pescoço."],
   correct:3, exp:"Em adulto inconsciente, verifica-se o pulso carotídeo (no pescoço, lateral à traqueia). O pulso radial (no pulso) frequentemente desaparece antes do carotídeo em quadros graves."},

  {tag:"PS", q:"Em caso de acidente em que a vítima está inconsciente e com sangramento na perna, a conduta correta é:",
   opts:["Socorrer a vítima com veículo próprio.","Não movimentar a vítima e acionar a equipe de socorro.","Tentar acordar a vítima com pano molhado em álcool.","Aplicar torniquete para estancar a hemorragia."],
   correct:1, exp:"Não move a vítima. Não improvise socorro. Acione o resgate e, se houver sangramento, faça compressão direta com pano limpo enquanto espera."},

  {tag:"PS", q:"Em acidente com princípio de incêndio e vítima, na ausência de especialista, o condutor deve PRIMEIRAMENTE:",
   opts:["Retirar rapidamente a vítima de dentro do veículo.","Aguardar a chegada dos bombeiros.","Remover o veículo para impedir o fogo.","Iniciar a reanimação da vítima."],
   correct:0, exp:"EXCEÇÃO à regra de 'não mover'. Quando há risco IMEDIATO de morte por outra causa (fogo, queda, afogamento), retirar a vítima é o certo — mesmo correndo risco de agravar lesões."},

  {tag:"PS", q:"Ao tentar desobstruir as vias aéreas de uma vítima, não se deve movimentar a cabeça, pois pode ocorrer:",
   opts:["Fratura dos membros inferiores.","Lesão na coluna.","Traumatismo craniano.","Fratura da bacia."],
   correct:1, exp:"Em vítima de trauma, sempre presumir lesão cervical. Movimentar a cabeça pode seccionar a medula e causar paralisia definitiva."},

  {tag:"PS", q:"Um condutor pode agravar o estado da vítima se:",
   opts:["Não retirar o capacete de motociclista até a chegada da equipe.","Soltar o cinto de segurança da vítima presa ao veículo se houver dificuldade de respiração.","Prestar o maior número de informações sobre o acidente.","Oferecer alimentos ou bebidas para acidentados que solicitarem."],
   correct:3, exp:"Oferecer comida/bebida a vítima de trauma é erro grave: risco de engasgo, vômito e aspiração; além disso, pode atrapalhar cirurgia que talvez precise ser feita de imediato."},

  {tag:"PS", q:"Nos casos de acidente em que a vítima apresenta parada cardiopulmonar, o procedimento correto da equipe de socorro é:",
   opts:["Respiração boca a boca.","Ventilação natural.","Massagem no coração.","Compressão torácica."],
   correct:3, exp:"O protocolo atual (desde 2015) prioriza compressões torácicas (RCP) — 100 a 120 por minuto. O 'boca a boca' por leigos foi desaconselhado por riscos sanitários e baixa eficácia."},

  {tag:"PS", q:"Nos acidentes em que a vítima apresenta perda de consciência, desmaio e falta de batimentos cardíacos, o condutor deve informar ao socorro que a vítima apresenta sinais de:",
   opts:["Crise aguda de asma.","Infecção respiratória.","Hemorragia interna.","Parada cardiorrespiratória."],
   correct:3, exp:"Inconsciência + ausência de pulso = parada cardiorrespiratória (PCR). Essa informação prioriza o despacho de equipe com desfibrilador."},

  {tag:"PS", q:"Em caso de atendimento a vítima com sangramento, é aconselhável:",
   opts:["Estancar o sangramento usando torniquete.","Oferecer água para evitar a desidratação.","Usar luva de borracha para evitar contaminações.","Ministrar analgésico e alimentar a vítima."],
   correct:2, exp:"Proteção é regra básica: luva (ou saco plástico) protege o socorrista contra contato com sangue. Torniquete é último recurso — a primeira escolha é compressão direta com pano limpo."},

  {tag:"PS", q:"Após queda de moto, motociclista apresenta hemorragia no peito. Enquanto aguarda o socorro, o condutor pode:",
   opts:["Não movimentar a vítima e comprimir o ferimento com gaze ou pano limpo.","Remover a vítima do local e comprimir o ferimento.","Remover a vítima e lavar com água abundante.","Não movimentar a vítima e lavar o ferimento com água abundante."],
   correct:0, exp:"Dois princípios juntos: NÃO MOVER + compressão direta com material limpo sobre o ferimento. Lavar sangramento ativo só dilui o coágulo e piora."},

  {tag:"PS", q:"Em caso de acidente com vítima, o motorista deve:",
   opts:["Garantir itens básicos de segurança e oferecer água à vítima.","Transportar a vítima ao pronto-socorro com seu próprio veículo.","Avaliar o estado geral da vítima e solicitar socorro.","Remover a vítima do veículo."],
   correct:2, exp:"Sequência básica: avaliar → solicitar socorro especializado. O transporte por meios próprios é desaconselhado — atrasa o atendimento adequado e arrisca a vítima."},

  {tag:"PS", q:"Para verificar as condições da vítima e informar à equipe de emergência, a maneira correta é:",
   opts:["A perda de consciência pode ser identificada pela frequência cardíaca ou pela ausência de respiração.","Lesões na medula podem ser identificadas movimentando a cabeça da vítima.","A hemorragia pode ser identificada pela observação de sangramentos pelo nariz, boca ou ferimentos.","A fratura exposta é identificada pelo inchaço de membros e ausência de sangramento."],
   correct:2, exp:"Hemorragias visíveis (externas) se identificam pela observação direta. NUNCA movimente a cabeça para 'testar' a coluna — pode causar a lesão que se busca descartar."},

  {tag:"PS", q:"Ao se deparar com um acidente com vítima, uma atitude correta entre as ações possíveis é:",
   opts:["Fazer torniquete se a vítima estiver com hemorragia.","Manter-se no meio da pista acenando para outros veículos.","Manter a calma e avaliar o estado geral da vítima.","Retirar a vítima rapidamente para liberar o tráfego."],
   correct:2, exp:"Princípio número 1 dos primeiros socorros: calma e avaliação. Sem isso, qualquer ação é arriscada — inclusive para o próprio socorrista."},

  {tag:"PS", q:"Um condutor que se depara com vítima com pequena hemorragia externa deve proteger as mãos e aplicar a técnica de:",
   opts:["Desinfetar o ferimento com álcool.","Aplicar compressão direta no ferimento com papel limpo.","Aplicar pó de café no ferimento.","Comprimir a região com um pano limpo."],
   correct:3, exp:"Compressão direta com pano (gaze, camiseta, lenço — desde que limpo). Papel se desfaz, álcool queima e arde, pó de café é mito popular sem nenhum respaldo médico."},

  {tag:"PS", q:"Um pedestre torceu o pé e queixa dor no tornozelo. O condutor, sem outras informações, deve:",
   opts:["Recolocar a articulação no lugar, com auxílio de outras pessoas.","Solicitar ao acidentado que dê alguns passos para verificar o entorse.","Orientar o acidentado a não caminhar até a chegada da equipe.","Enfaixar fortemente o pé com pano molhado."],
   correct:2, exp:"Suspeita de luxação/fratura: imobilizar mentalmente, manter a vítima parada, esperar. Andar pode transformar entorse simples em fratura completa."},

  {tag:"PS", q:"Ao presenciar acidentes com vítima, o condutor deve, entre outras providências de segurança do local:",
   opts:["Sinalizar colocando fogo em galhos de árvores.","Colocar o veículo no sentido contrário ao fluxo com farol alto ligado.","Estacionar em local seguro, com pisca-alerta acionado, e sinalizar o local com o triângulo.","Parar o veículo na pista de rolamento e sinalizar com gestos."],
   correct:2, exp:"Triângulo + pisca-alerta + estacionar em local seguro = protocolo. Fogo é absurdo (risco de incêndio); ficar na pista é receita para um segundo acidente."},

  {tag:"PS", q:"Em caso de acidente, uma das regras fundamentais para sinalizar o ocorrido é:",
   opts:["Não permitir que curiosos parem na via destinada ao tráfego.","Não sinalizar com materiais encontrados no local, como galhos.","Sinalizar a uma distância de 3 metros do acidente.","Selecionar pessoas vestidas de branco para sinalizar."],
   correct:0, exp:"Curiosos parados na pista geram congestionamento e, pior, novos acidentes. Manter o tráfego fluindo é segurança coletiva — e permite que o socorro chegue mais rápido."},

  {tag:"PS", q:"Em acidente com vítima, manter o tráfego fluindo é importante porque:",
   opts:["Possibilita a chegada mais rápida da equipe de socorro.","Impede que as empresas de transporte sofram prejuízos.","Possibilita que as pessoas em deslocamento não se atrasem.","Impede que o acidente gere congestionamento."],
   correct:0, exp:"O motivo é humano, não logístico. Fluxo livre = ambulância chega mais rápido = vítima sobrevive."},

  {tag:"PS", q:"Ao se deparar com um acidente grave na via, a primeira providência mais segura para todos é:",
   opts:["Isolar e sinalizar o local e acionar o socorro profissional para o transporte da vítima.","Retirar imediatamente as vítimas dos veículos.","Tentar reanimar a vítima imediatamente.","Mover os veículos para liberar a via."],
   correct:0, exp:"A sequência protetora é: isolar (evitar mais acidentes) → sinalizar → acionar especialistas. Sem essa base, qualquer atendimento direto é arriscado."},

  // ============ MISTAS / CTB / SINALIZAÇÃO ============
  {tag:"DD", q:"Estacionar o veículo no passeio (calçada) ou sobre a faixa destinada a pedestres é infração:",
   opts:["Leve.","Gravíssima.","Média.","Grave."],
   correct:1, exp:"CTB, art. 181, VIII: estacionar sobre calçada ou faixa de pedestre = infração GRAVÍSSIMA, 7 pontos, multa e remoção do veículo."},

  {tag:"DD", q:"Transitar pela contramão de direção em vias com sinalização de sentido único é uma infração:",
   opts:["Média.","Grave.","Leve.","Gravíssima."],
   correct:3, exp:"CTB, art. 186, II: contramão em via de sentido único = infração GRAVÍSSIMA. Multa, pontos e suspensão em casos de reincidência."},

  {tag:"DD", q:"Caracteriza-se crime de trânsito conduzir veículo com concentração de álcool por litro de sangue igual ou superior a:",
   opts:["6 (seis) decigramas.","8 (oito) decigramas.","4 (quatro) decigramas.","2 (dois) decigramas."],
   correct:0, exp:"CTB, art. 306: ≥ 6 dg/L de sangue (ou 0,3 mg/L no ar expirado) configura crime — detenção de 6 meses a 3 anos. Abaixo disso, é infração administrativa gravíssima."},

  {tag:"DD", q:"A desobediência ao sinal vermelho ou à parada obrigatória é uma infração gravíssima, que será punida com:",
   opts:["Multa e remoção do veículo.","Multa, apenas.","Multa e apreensão do veículo.","Multa e apreensão da CNH."],
   correct:1, exp:"Avançar o vermelho (art. 208 CTB): infração gravíssima, 7 pontos, multa. Não há apreensão automática do veículo ou da CNH."},

  {tag:"DD", q:"As vias rurais abertas à circulação de veículos classificam-se em:",
   opts:["Via de trânsito rápido, arterial, coletora, local, rodovias e estradas.","Via de trânsito rápido, arterial, coletora e local.","Via arterial, coletora e local.","Rodovias e estradas."],
   correct:3, exp:"CTB: as vias RURAIS são apenas rodovias (pavimentadas) e estradas (não pavimentadas). Trânsito rápido, arterial, coletora e local são classificações URBANAS."},

  {tag:"DD", q:"A linha simples contínua de divisão de fluxo, na cor amarela, separando a via em duas mãos direcionais, indica que:",
   opts:["A ultrapassagem é permitida.","Os deslocamentos laterais são permitidos.","A ultrapassagem e os deslocamentos laterais são proibidos.","Ambos são permitidos."],
   correct:2, exp:"Linha amarela contínua = absolutamente proibido cruzar — vale para ultrapassagem e para qualquer manobra de deslocamento lateral. Linha tracejada permite."},

  {tag:"DD", q:"As placas educativas têm como função:",
   opts:["Indicar locais com serviços auxiliares e a direção a seguir.","Indicar locais com atrativos turísticos e instalações de comodidade.","Indicar a direção para atingir destinos e características geográficas.","Orientar os usuários quanto ao seu comportamento adequado e seguro no trânsito."],
   correct:3, exp:"Placas educativas reforçam normas e comportamento (ex.: 'pare na faixa', 'respeite a sinalização'). As outras descrições são de placas de indicação."},

  {tag:"DD", q:"O documento suficiente para conduzir ciclomotor em todo o território nacional é a:",
   opts:["CNH categoria A.","ACC — Autorização para Conduzir Ciclomotor.","CRLV do ciclomotor.","Permissão para Dirigir."],
   correct:1, exp:"ACC (Autorização para Conduzir Ciclomotor) é específica para ciclomotor (até 50 cilindradas, até 50 km/h). Quem tem CNH-A também pode."},

  {tag:"DD", q:"Para virar à esquerda em cruzamento de via urbana com duplo sentido, o condutor deve:",
   opts:["Sinalizar com a seta e, ao atingir a linha divisória da pista, executar a manobra cedendo passagem aos veículos em sentido contrário.","Sinalizar e forçar passagem entre veículos do sentido contrário.","Sinalizar com pisca-alerta e atingir a linha divisória.","Sinalizar com a seta e aguardar à direita da pista para virar."],
   correct:0, exp:"Procedimento padrão: seta + posicionamento próximo à divisória + dar preferência a quem vem em sentido contrário. Pisca-alerta não substitui seta."},

  {tag:"DD", q:"Em via com mais de uma faixa de rolamento no mesmo sentido, a ultrapassagem pela direita é:",
   opts:["Proibida, exceto se o veículo da frente estiver na faixa apropriada e sinalizando que vai virar à esquerda.","Sempre permitida em vias de duas faixas.","Sempre proibida, sob qualquer hipótese.","Permitida apenas em rodovias."],
   correct:0, exp:"CTB, art. 29, IX: a regra é ultrapassar pela esquerda. A única exceção é quando o veículo da frente está sinalizando conversão à esquerda — aí passa-se pela direita."},

  {tag:"DD", q:"A circulação de bicicletas nos passeios públicos é:",
   opts:["Proibida para bicicletas de aros superiores a 24.","Permitida desde que o passeio tenha largura superior a 1 metro.","Permitida, desde que autorizada e sinalizada pelo órgão com circunscrição sobre a via.","Permitida para bicicletas de crianças e adolescentes."],
   correct:2, exp:"Em regra, bicicleta circula em via, ciclofaixa ou ciclovia. Calçada só é permitida se houver sinalização específica do órgão de trânsito autorizando."},

  {tag:"DD", q:"A validade da Permissão para Dirigir é de:",
   opts:["Seis meses.","Dois anos.","Um ano.","Três meses."],
   correct:2, exp:"PPD = 1 ano. Sem cometer infração grave/gravíssima ou ser reincidente em médias nesse período, o condutor obtém a CNH definitiva."},

  {tag:"PS", q:"Em acidente com motociclista, a remoção do capacete:",
   opts:["Deve ser feita imediatamente pelo socorrista leigo.","Não deve ser feita pelo socorrista leigo, exceto em risco iminente.","Deve ser feita para verificar a respiração.","Sempre é necessária para iniciar primeiros socorros."],
   correct:1, exp:"Retirar capacete sem técnica pode causar lesão cervical irreversível. Só remove em risco iminente (fogo, vômito asfixiante etc.) — e mesmo assim, idealmente em dupla, segurando a cervical."},

  {tag:"DD", q:"Em uma situação de emergência, sendo necessário imobilizar o veículo em via sem acostamento, ele deve sinalizar o local. A ausência de acostamento é condição adversa relacionada com:",
   opts:["Clima e/ou ambiente.","Condutor.","Via.","Veículo."],
   correct:2, exp:"Ausência de acostamento, buracos, sinalização ruim, traçado da pista — tudo isso é condição adversa da VIA."},

  {tag:"DD", q:"O condutor que vai parar o veículo no acostamento deve:",
   opts:["Acionar o pisca-alerta com o veículo ainda na pista, reduzir, entrar no acostamento e colocar o triângulo.","Entrar no acostamento na mesma velocidade e só depois acender o pisca-alerta.","Acionar a seta e entrar rapidamente no acostamento.","Acionar a seta, reduzir, entrar no acostamento, colocar o triângulo e ligar o pisca-alerta."],
   correct:3, exp:"Sequência correta: SETA (não pisca-alerta — confunde a direção) → reduzir → entrar no acostamento → triângulo posicionado a uma distância segura → aí sim pisca-alerta com o veículo parado."},

  {tag:"DD", q:"Em vias com velocidade máxima de 80 km/h, a distância mínima para iniciar a sinalização de acidente à noite, em pista molhada ou neblina, é de:",
   opts:["160 metros (≈160 passos).","60 metros (≈60 passos).","100 metros (≈100 passos).","40 metros (≈40 passos)."],
   correct:0, exp:"Regra: dobra-se a velocidade em metros em condições adversas. 80 km/h × 2 = 160 metros. Em condições normais seria 80 m."},

  {tag:"DD", q:"Em uma rodovia, ao perceber poças d'água atravessadas na pista, o condutor deve:",
   opts:["Frear bruscamente sobre a água para reduzir.","Reduzir a velocidade antes da poça e mantê-la na travessia, sem frear.","Acelerar para passar mais rápido.","Manter a velocidade e fazer zigue-zague."],
   correct:1, exp:"Antes da poça reduz. Sobre a poça, não freia (evita travar a roda). Mantém o volante firme e atravessa em linha reta."},

  {tag:"PS", q:"Em uma vítima inconsciente, o socorrista leigo deve:",
   opts:["Borrifar água no rosto para acordá-la.","Verificar respiração e pulso, manter as vias aéreas livres e aguardar o socorro.","Sacudi-la pelos ombros.","Levantá-la para verificar se há fraturas."],
   correct:1, exp:"Avaliação: respira? tem pulso? Vias aéreas desobstruídas? Se sim, manter na posição (não move!), aguardar socorro. Acordar à força ou movimentar pode matar."},

  {tag:"DD", q:"Em caso de cansaço extremo durante uma viagem, o condutor deve:",
   opts:["Tomar bebidas energéticas ou café forte.","Reclinar o banco e continuar dirigindo lentamente.","Parar em local seguro e descansar — se possível, dormir.","Ouvir música em volume alto para se manter desperto."],
   correct:2, exp:"Fadiga só passa com sono. Música alta, energético, café — tudo isso disfarça por minutos. Microssono em rodovia mata."},

  {tag:"PS", q:"Em vítima com fratura exposta de membro, o procedimento leigo correto é:",
   opts:["Tentar reposicionar o osso no lugar.","Cobrir o ferimento com pano limpo, não movimentar a vítima e aguardar o socorro.","Lavar o ferimento com água oxigenada e enfaixar firme.","Aplicar gelo direto sobre o osso exposto."],
   correct:1, exp:"Fratura exposta: cobrir (proteger de contaminação), não tocar no osso, não tentar 'arrumar', e principalmente não mover a vítima — pode haver outras lesões associadas."},

  {tag:"DD", q:"A distância de seguimento adequada em condições normais é, em média, de:",
   opts:["1 segundo do veículo da frente.","2 segundos do veículo da frente.","5 metros, independentemente da velocidade.","Meio quilômetro."],
   correct:1, exp:"Regra prática internacional: 2 segundos do veículo da frente em condições normais. Sob chuva, dobre para 4 segundos."},

  {tag:"DD", q:"Ao fazer curvas em rodovias, para maior segurança, o condutor deve:",
   opts:["Aumentar a velocidade antes da curva e frear sucessivamente.","Manter a velocidade e frear no meio da curva.","Reduzir antes da curva, movimentar o volante de forma suave e acelerar gradativamente.","Acelerar no início da curva para aumentar a aderência dos pneus."],
   correct:2, exp:"A regra é simples: freia ANTES, acelera DEPOIS. Frear dentro da curva transfere peso e pode jogar o veículo para fora."},

  {tag:"PS", q:"O método de respiração 'boca a boca' por socorrista leigo:",
   opts:["É sempre obrigatório em PCR.","Não deve mais ser aplicado por leigos — basta desobstruir as vias aéreas e fazer compressões torácicas.","Deve ser aplicado apenas em crianças.","Deve ser combinado com massagem na cabeça."],
   correct:1, exp:"Protocolo internacional pós-2015: leigo faz apenas compressões torácicas contínuas (100-120/min). 'Boca a boca' fica para profissionais com EPI ou para pessoas treinadas e dispostas."},

  {tag:"DD", q:"O condutor que dirige após ingerir bebida alcoólica:",
   opts:["Melhora seus reflexos e percepção.","Apresenta redução da capacidade para tomada de decisão.","Tem maior controle emocional.","Dirige com mais segurança em curvas."],
   correct:1, exp:"Álcool deprime o sistema nervoso central — afeta julgamento, reflexos, atenção, percepção de velocidade e distância. Tudo o que dirigir requer."},

  {tag:"DD", q:"São condições adversas do CONDUTOR:",
   opts:["Sono, audição ou visão deficientes e desconcentração.","Sono e capacidade de falar em público.","Audição deficiente e conhecimento de mecânica.","Visão deficiente e conhecimento da legislação."],
   correct:0, exp:"Condições adversas do condutor são tudo que reduz a capacidade DELE de dirigir: sono, fadiga, sentidos comprometidos, distração, emoção alterada, álcool/drogas."},

  {tag:"DD", q:"Para entregar uma carga sem atraso, um condutor dirige por muitas horas seguidas sem descanso. Essa atitude representa:",
   opts:["Preocupação e cuidado consigo e com os demais.","Dedicação à empresa e senso de responsabilidade.","Alto espírito profissional, sem comprometer a segurança.","Condição adversa do condutor — fadiga — que pode gerar acidentes."],
   correct:3, exp:"Fadiga é condição adversa clássica. Pressão para cumprir prazos é uma das maiores causas de acidente em transporte de carga."},

  {tag:"DD", q:"A falta de controle emocional ao dirigir:",
   opts:["Não interfere na segurança e na convivência no trânsito.","Dá mais agilidade ao condutor e melhora a convivência.","Pode livrar o condutor de um acidente.","Pode causar acidentes e desentendimentos com outros condutores."],
   correct:3, exp:"Raiva, pressa, ansiedade, irritação — tudo isso interfere no julgamento e nas reações. Trânsito é o local público em que o estado emocional mais se materializa em risco real."},

  {tag:"PS", q:"O condutor que socorre uma vítima inconsciente e sem respiração, mas com pulso, deve:",
   opts:["Iniciar compressões torácicas imediatamente.","Manter as vias aéreas livres e aguardar a chegada do socorro.","Borrifar água e tentar reanimar.","Oferecer água assim que a vítima reagir."],
   correct:1, exp:"Sem respiração mas COM pulso: a urgência é via aérea, não coração. Manter cabeça/pescoço alinhados, vias livres, aguardar. Se o pulso parar, aí começa RCP."},

  {tag:"DD", q:"O condutor infrator será submetido a curso de reciclagem e avaliação psicológica quando:",
   opts:["Se envolver em acidente grave para o qual tenha contribuído.","Cometer infração de natureza grave.","Cometer infração por excesso de velocidade até 20% do permitido.","Estacionar afastado a 1 metro da guia."],
   correct:0, exp:"CTB, art. 268: reciclagem obrigatória em situações específicas — envolvimento em acidente grave para o qual contribuiu, suspensão do direito de dirigir, cassação, condenação por crime de trânsito etc."},

  {tag:"DD", q:"Em uma via urbana, a velocidade máxima padrão (sem sinalização específica) em via local é de:",
   opts:["30 km/h.","40 km/h.","50 km/h.","60 km/h."],
   correct:0, exp:"CTB, art. 61, §1º, II, 'd': vias urbanas LOCAIS = 30 km/h. Coletoras = 60. Arteriais = 60. Trânsito rápido = 80."},

  {tag:"DD", q:"O cinto de segurança no banco traseiro:",
   opts:["É facultativo.","É obrigatório para todos os passageiros, em qualquer banco.","Só é obrigatório em rodovias.","Só é obrigatório à noite."],
   correct:1, exp:"CTB, art. 65: cinto é obrigatório para todos os ocupantes, em todos os bancos, em qualquer via. Multa por descumprimento é gravíssima."},

  {tag:"DD", q:"Em um cruzamento sem sinalização, a preferência é:",
   opts:["Do veículo que estiver mais à esquerda.","Do veículo que estiver mais à direita.","Do veículo maior.","Do veículo que chegou primeiro."],
   correct:1, exp:"CTB, art. 29, III, 'c': no cruzamento sem sinalização, dê preferência ao que vem pela direita. Regra clássica de cortesia formalizada em lei."},

  {tag:"DD", q:"O uso do telefone celular ao volante:",
   opts:["É permitido apenas no modo viva-voz.","É infração leve sempre.","É infração gravíssima quando feito segurando o aparelho.","É permitido em vias urbanas."],
   correct:2, exp:"CTB, art. 252, V: dirigir segurando o celular = infração GRAVÍSSIMA. Viva-voz/bluetooth com o aparelho no suporte é tolerado, mas exige atenção."},

  {tag:"PS", q:"Em vítima que apresenta queimadura por contato com peças quentes do veículo, o procedimento leigo correto é:",
   opts:["Aplicar pasta dental, manteiga ou óleo na queimadura.","Resfriar a área com água corrente em temperatura ambiente e cobrir com pano limpo.","Estourar bolhas para liberar o líquido.","Lavar com álcool para desinfetar."],
   correct:1, exp:"Queimadura: água corrente (não gelada) por alguns minutos, cobrir com pano limpo e seco, aguardar socorro. Pasta de dente, manteiga, óleo, gelo e estouro de bolha — tudo agrava."},

  {tag:"DD", q:"A placa de regulamentação R-1 (PARE) indica que o condutor deve:",
   opts:["Reduzir a velocidade sem necessidade de parar.","Parar e acessar a via com segurança.","Parar somente se não estiver na via preferencial.","Atravessar a via devagar e com cuidado."],
   correct:1, exp:"R-1 (PARE) é parada OBRIGATÓRIA, mesmo que a via cruzada esteja vazia. Quem desrespeita comete infração gravíssima (art. 208 do CTB)."},

  {tag:"DD", q:"A placa de advertência A-32b alerta o condutor para:",
   opts:["Fiscalização por agente de trânsito.","Obras e trabalhadores na pista.","Passagem sinalizada de pedestres.","Trecho com alto índice de atropelamento."],
   correct:2, exp:"A-32b é a placa amarela com pedestre na faixa — alerta para travessia sinalizada. Reduzir velocidade e dar preferência ao pedestre."},

  {tag:"DD", q:"Em rodovia com sinalização de velocidade máxima de 110 km/h, a velocidade mínima é de:",
   opts:["55 km/h.","60 km/h.","45 km/h.","40 km/h."],
   correct:0, exp:"CTB, art. 62: velocidade mínima = metade da máxima. 110÷2 = 55 km/h. Andar abaixo disso atrapalha o fluxo e é infração."},

  {tag:"PS", q:"Sobre o uso de torniquete para hemorragia em primeiros socorros:",
   opts:["É a primeira opção em qualquer hemorragia.","Deve ser aplicado em qualquer ferimento de extremidade.","É medida extrema, último recurso, e a primeira escolha é compressão direta.","Substitui a compressão direta na maioria dos casos."],
   correct:2, exp:"Torniquete pode causar perda do membro. A protocolo é: compressão direta → elevação do membro → ponto de pressão → torniquete (último, e só por treinados, em hemorragia massiva)."},

  {tag:"DD", q:"Por dirigir sob efeito de álcool, a infração e penalidade do condutor é:",
   opts:["Gravíssima; multa (10 vezes o valor do grupo) e suspensão do direito de dirigir.","Gravíssima; apreensão do veículo.","Média; apreensão do veículo.","Grave; cassação do direito de dirigir."],
   correct:0, exp:"CTB, art. 165: infração gravíssima com multa decuplicada (10×), suspensão do direito de dirigir por 12 meses, retenção do veículo até regularização. Sem prejuízo das sanções penais (art. 306)."},
];
