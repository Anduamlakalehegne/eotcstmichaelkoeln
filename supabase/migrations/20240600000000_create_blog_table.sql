-- Create blog table
CREATE TABLE IF NOT EXISTS blog (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    author TEXT,
    featured BOOLEAN DEFAULT false,
    tags TEXT[] DEFAULT '{}',
    language TEXT NOT NULL DEFAULT 'am' CHECK (language IN ('en', 'am', 'de')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on language for faster filtering
CREATE INDEX IF NOT EXISTS idx_blog_language ON blog(language);
CREATE INDEX IF NOT EXISTS idx_blog_created_at ON blog(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_updated_at
    BEFORE UPDATE ON blog
    FOR EACH ROW
    EXECUTE FUNCTION update_blog_updated_at_column(); 