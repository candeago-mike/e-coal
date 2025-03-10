<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Article::with('tags')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'thumbnailURL' => 'required',
            'mediaType' => 'required',
            'mediaURL' => 'required',
            'leadStory' => 'required',
        ]);

        $article = Article::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),
            'thumbnailURL' => $request->input('thumbnailURL'),
            'mediaType' => $request->input('mediaType'),
            'mediaURL' => $request->input('mediaURL'),
            'leadStory' => $request->input('leadStory'),
        ]);

        return response()->json($article, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return $article;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->tags()->detach();
        $article->delete();
        return response()->json(null, 204);
    }
}
