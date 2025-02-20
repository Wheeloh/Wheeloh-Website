"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function CommunityStandards() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header showNavLinks={true} />

      <main className="flex-1 container px-4 md:px-6 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="prose prose-gray max-w-none">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Normes Communautaires et de Sécurité des Enfants de Wheeloh</h2>
            
            <p className="mt-4">
              Bienvenue sur la page officielle des normes communautaires de <strong>Wheeloh</strong>, le réseau social
              dédié aux passionnés d'automobiles. Nous nous engageons à créer un environnement sûr
              et respectueux pour tous nos utilisateurs, en mettant l'accent sur la protection des enfants et
              la prévention de l'exploitation et des abus sexuels sur mineurs.
            </p>

            <h4 className="text-xl font-semibold mt-8">Engagement Contre l'Exploitation et les Abus Sexuels sur Mineurs</h4>
            
            <h5 className="font-semibold mt-4">Interdiction Absolue</h5>
            <p>
              Toute forme d'exploitation ou d'abus sexuel sur mineurs est strictement interdite sur
              Wheeloh. Nous appliquons des mesures de modération rigoureuses pour détecter et
              supprimer immédiatement tout contenu ou comportement en lien avec ces pratiques.
              Toute infraction sera signalée aux autorités compétentes.
            </p>

            <h5 className="font-semibold mt-4">Sécurité des Enfants</h5>
            <p>
              La protection des mineurs est une priorité essentielle. Nous encourageons tous les
              utilisateurs à signaler tout contenu suspect ou inapproprié via notre mail :
              <a href="mailto:contact@wheeloh.com" className="text-blue-600 hover:underline">contact@wheeloh.com</a> afin que des mesures rapides puissent être prises.
            </p>

            <h4 className="text-xl font-semibold mt-8">Responsabilités et Engagement des Utilisateurs</h4>
            <p>
              En accédant et en utilisant Wheeloh, vous acceptez de respecter l'ensemble des règles
              suivantes :
            </p>

            <ol className="list-decimal pl-6 mt-4">
              <li>
                <strong>Respect des Normes</strong><br />
                Vous vous engagez à ne jamais publier, partager ou promouvoir du contenu
                impliquant l'exploitation ou les abus sexuels sur mineurs.
              </li>
              <li>
                <strong>Signalement</strong><br />
                En cas de découverte de contenu inapproprié, veuillez utiliser les outils de
                signalement disponibles sur l'application ou contacter directement notre équipe de
                modération via <a href="mailto:contact@wheeloh.com" className="text-blue-600 hover:underline">contact@wheeloh.com</a>.
              </li>
              <li>
                <strong>Sanctions</strong><br />
                Le non-respect de ces règles pourra entraîner la suspension ou la suppression
                immédiate de votre compte, et, si nécessaire, une communication aux autorités
                compétentes.
              </li>
            </ol>

            <h4 className="text-xl font-semibold mt-8">Accès et Transparence</h4>
            <p>
              Pour en savoir plus sur nos politiques et nos pratiques de modération, veuillez consulter nos
              documents officiels :
            </p>
            <ul className="list-disc pl-6">
              <li>Conditions d'Utilisation Wheeloh</li>
            </ul>
            <p>
              Ces ressources sont accessibles à tous et se chargent sans erreur. Elles fournissent des
              informations détaillées sur nos règles relatives à l'exploitation et aux abus sexuels sur
              mineurs ainsi qu'à la sécurité des enfants, conformément aux exigences de la Play Console.
            </p>
            <h4 className="text-xl font-semibold mt-8">Contact</h4>
            <p>
              Pour toute question relative aux normes communautaires, vous pouvez contacter l'éditeur par e-mail à <a href="mailto:contact@wheeloh.com" className="text-blue-600 hover:underline">contact@wheeloh.com</a>.<br />
            </p>
            <p className="text-sm text-muted-foreground mt-8">
              Dernière mise à jour : 20/02/2025<br />
              Version : 0.1
            </p>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
} 