-- Create church_calendars table
CREATE TABLE church_calendars (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    year INTEGER NOT NULL UNIQUE,
    title TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_name TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Disable RLS
ALTER TABLE church_calendars DISABLE ROW LEVEL SECURITY;

-- Create index for faster queries
CREATE INDEX idx_church_calendars_year ON church_calendars(year);
CREATE INDEX idx_church_calendars_is_active ON church_calendars(is_active);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_church_calendars_updated_at
    BEFORE UPDATE ON church_calendars
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 