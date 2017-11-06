using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shipbob
{
    public static class StringExtensions
    {
        public static String SubstringSafe(this string input, int startIndex, int length)
        {
            if (input.Length < startIndex + length)
                length = input.Length - (startIndex);
            return input.Substring(startIndex, length);
        }

    }
}