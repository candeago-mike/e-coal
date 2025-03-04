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
            'content' => '<h1>Welcome to Annecy</h1><p>Annecy is a beautiful city in France. Enjoy !</p>',
            'thumbnailURL' => 'ecoal2.jpg',
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
