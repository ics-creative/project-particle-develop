using Microsoft.Xna.Framework.Media;
using System;
using System.IO;
using System.Text;
using WPCordovaClassLib.Cordova;
using WPCordovaClassLib.Cordova.Commands;
using WPCordovaClassLib.Cordova.JSON;

public class Base64ToGallery : BaseCommand
{
    public Base64ToGallery()
	{
	}

    public void saveImageDataToLibrary(string jsonArgs)
    {
        try
        {
            var options = JsonHelper.Deserialize<string[]>(jsonArgs);

            string imageData  = options[0];
            string prefix     = options[1];
            byte[] imageBytes = Convert.FromBase64String(imageData);

            if (String.IsNullOrEmpty(prefix))
            {
                prefix = "img_";
            }

            using (var imageStream = new MemoryStream(imageBytes))
            {
                imageStream.Seek(0, SeekOrigin.Begin);

                string fileName = prefix + String.Format("{0:yyyyMMddHHmmss}", DateTime.Now);
                var library     = new MediaLibrary();
                var picture     = library.SavePicture(fileName, imageStream);

                if (picture.Name.Contains(fileName))
                {
                    DispatchCommandResult(new PluginResult(PluginResult.Status.OK));
                }
                else
                {
                    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Failed to save image: " + picture.Name));
                }
            }
        }
        catch (Exception ex)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, ex.Message));
        }
    }
}
