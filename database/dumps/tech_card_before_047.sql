PGDMP              
        	    z            ots_test    14.5    14.5     [           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            \           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ]           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ^           1262    171342    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false                       1259    174162    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false                       1259    174161    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    262            _           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    261            �           2604    174165    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    261    262    262            X          0    174162    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    262           `           0    0    technical-card_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."technical-card_id_seq"', 46, true);
          public          postgres    false    261            �           2606    174169 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    262            �           2606    174171 '   technical-card technical-card_title_key 
   CONSTRAINT     g   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_title_key" UNIQUE (title);
 U   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_title_key";
       public            postgres    false    262            X   �  x��Z]n�F~����6ZK�]�"s��c#�?A�N�"�N���dՌ,�WX^�'��,%��˱I6Z;��fgg�YZ�?ͬ��Y�{���z����o��c�+�QP���)�S�9����Ɩ�YfR^�g0xS�#S�)�ss�;��h`
y##3��.�a�<0W�w�1���=|�ñ�x���@�J��X�@���z��(M�
�#&�:e�ǥ} ���y9�G��x�Ƨ\������s�5	��b���!2�~Y���E����jj�P�$�σڅ�#�K�\�$�s�x܍�T�7��¢��@"9�dI�X���K�Lbp`~���Y+�����^����L |n�pWa�������' ��J��RJۡ��2�g�sF�ȐsNSWc7�����a�w�z�x�q�2���"d�K� y�s�[�<nȟ�7ͤ
�Ϗ&���ܗ- �-�.����w^S~���0-Y�5I2J"I�=E&!U��:�\��ɀ-b�$��K��\s����1z�W>V�����XFaBv�Y��{%�17$��l��km�1�c S����+:�A��%d4����W�vY���j��(�8�c�%2�z�W�L�S���U��%ƽ0x<ᘄLku��RW�FF��☄�q�Uw5���+���-�������q���Q ䷜� ׺���b�+���6�'�:!��:�6��Ӭ	��.<,���8;&��Sv�T]_T8}��1	�l@��̸[vu]
T`|��1	������E�E��1�٘Y�3ͻ$��c 2������Y]|�Ԛc
��/�B]X�����U%�L��m�ǆ@���]k+{�^�-6�;mtLB�����`���lU�&��*���1i�m����9m'T�.�C�+a�\a�n��QN�՞E�W�?��12A�lV�&�@&| �U��u��M���@yUE�!~�G��F��O5d��_���9�OH3JB�H'�Р$�cs��v��d�\#v�L�rk :� T�k"��
ZQ�Q�����zP+%�Ih�4�]ĈO9Da/c���$4(���$��I���O 0�+�$t�<�],�O% r��$t�BgE�Sc}����H��П;6&�58��O��:a�狍I�9t؊���x;ۀ�}�a*߻)�$t��`W}}L�U��3!�pC�L���#K��ME���"j�������j�����à��P�Vfפ,����#_�Dh��&�?)���={a;���j��	��=��SyO9�߳Y�$�־�'9Y�\�}e)�<�زW<{\%�������oͯ������S�=,��H���$IQ��[�:8����p���#[>�Q��K܀�M��D�:;��VP�z�B�+Ri�i�X{� pK�-��-b��E�}�=�`����v��Ѡ�Ć��+ �L�/of�7��[�*�������yU��I�n`kQ�&�/p�3Gj��Z���'�����Y     