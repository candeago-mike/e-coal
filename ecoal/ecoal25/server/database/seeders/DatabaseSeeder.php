<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Article;
use App\Models\Tag;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        $article = Article::create([
            'title' => 'Annecy',
            'content' => `<h1>ANNECY: A Fairytale Escape</h1>

<p>I recently had the chance to visit Annecy, and honestly, it felt like stepping into a postcard. Nestled in the French Alps, this charming lakeside town is often called the <strong>"Venice of the Alps"</strong> because of its beautiful canals, pastel-colored houses, and stunning mountain views.</p>

<h2>Where to Stay & Getting Around</h2>
<p>I stayed at <strong>Hôtel du Palais de l’Isle</strong>, a cozy boutique hotel right in the heart of the old town. If you’re looking for a more luxurious experience, <strong>Les Trésoms Lake & Spa Resort</strong> offers breathtaking views of Lake Annecy.</p>
<p>The best way to get around? Walk! The town is super pedestrian-friendly, but you can also rent a bike or take a boat across the lake for a different perspective.</p>

<h2>Must-See Places</h2>
<p><strong>Annecy’s Old Town (Vieille Ville)</strong> is magical—narrow cobbled streets, colorful buildings, and charming bridges over the canals. One of the most iconic sights is the <strong>Palais de l’Isle</strong>, a medieval castle in the middle of a canal that looks like something out of a fairytale.</p>
<p>I also hiked up to the <strong>Château d’Annecy</strong>, which offers amazing views of the town and lake. Of course, <strong>Lake Annecy</strong> itself is the main attraction—the turquoise water is so clear, and you can swim, kayak, or just relax by the shore.</p>

<h2>Food to Try</h2>
<p>The food in Annecy is a dream, especially if you love cheese! I tried <strong>tartiflette</strong>, a baked dish with potatoes, reblochon cheese, bacon, and onions—pure comfort food. Another must-try is <strong>raclette</strong>, where melted cheese is scraped onto potatoes and charcuterie. For dessert, I couldn’t resist a <strong>savoyard blueberry tart</strong>—simple but delicious.</p>

<p>Annecy completely stole my heart. Whether you're into history, nature, or just enjoying good food with a view, this place is absolutely <strong>worth a visit</strong>!</p>
`,
            'thumbnailURL' => 'ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $tag1 = Tag::create(['name' => 'France']);
        $tag2 = Tag::create(['name' => 'annecy']);

        $article->tags()->attach([$tag1->id, $tag2->id]);

        $article = Article::create([
            'title' => 'Welcome to ecoal25',
            'content' => '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>',
            'thumbnailURL' => 'ecoal.jpg',
            'mediaType' => 'image',
            'mediaURL' => 'ecoal.jpg',
            'leadStory' => false
        ]);

        $tag1 = Tag::create(['name' => 'ecoal25']);
        $tag2 = Tag::create(['name' => 'react']);

        $article->tags()->attach([$tag1->id, $tag2->id]);
    }
}
