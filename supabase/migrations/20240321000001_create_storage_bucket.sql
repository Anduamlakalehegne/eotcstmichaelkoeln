-- Create storage bucket for church calendars
INSERT INTO storage.buckets (id, name, public)
VALUES ('church-calendars', 'church-calendars', true);

-- Remove all RLS policies
ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY; 