using System;
using System.Collections.Generic;
using System.Text;

namespace modelLib.models
{
    public class Record
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public int Duration { get; set; }
        public int YearOfPublication { get; set; }

        public Record()
        {

        }

        public Record(int id, string title, string artist, int duration, int yearOfPublication)
        {
            Id = id;
            Title = title;
            Artist = artist;
            Duration = duration;
            YearOfPublication = yearOfPublication;
        }

        public override string ToString()
        {
            return $"id: {Id} - title: {Title} - artist: {Artist} - Duration: {Duration} - YearOfPublication: {YearOfPublication}";
        }
    }
}
