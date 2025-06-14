-- Create archive table
CREATE TABLE IF NOT EXISTS archive (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    year TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('photo', 'document')),
    category TEXT NOT NULL,
    image_url TEXT,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS archive_year_idx ON archive(year);
CREATE INDEX IF NOT EXISTS archive_type_idx ON archive(type);
CREATE INDEX IF NOT EXISTS archive_category_idx ON archive(category);

-- Enable Row Level Security
ALTER TABLE archive ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON archive
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON archive
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON archive
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete for authenticated users only" ON archive
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_archive_updated_at
    BEFORE UPDATE ON archive
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 