import {Adenine, Base, Cytosine, Guanine, Uracil} from "../nucleotides/base";
import {
    Alanine,
    AminoAcid, Arginine, Asparagine, AsparticAcid,
    Cysteine, GlutamicAcid, Glutamine, Glycine,
    Histidine, Isoleucine,
    Leucine, Lysine, Methionine,
    Phenylalanine,
    Proline,
    Serine, Threonine,
    Tryptophan,
    Tyrosine, Valine
} from "./amino-acids";

// Function converts an array of 3 nucleotide bases to an amino acid or a stop. 5' -> 3'
export function codonToAminoAcid(codon: Base[]): AminoAcid | Stop {
    if (!codon || codon.length !== 3) {
        throw new Error(`Codon should consist of 3 nucleotide bases, not ${codon?.length ?? 0}`);
    }
    const c5 = codon[0];
    const c4 = codon[1];
    const c3 = codon[2];
    if (!c5 || !c4 || !c3) {
        throw new Error("Bases are not allowed to be undefined");
    }

    // While yes this code is definitely not great, it is meant to be a copy of what you would normally do with
    // the wind rose given to you in a textbook. A cool part of this is generating a table by going over all possible combinations.
    if (c5 instanceof Uracil) {
        if (c4 instanceof Uracil) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return Phenylalanine;
            } else {
                return Leucine;
            }
        } else if (c4 instanceof Cytosine) {
            return Serine;
        } else if (c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return Tyrosine;
            } else {
                return Stop;
            }
        } else {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return Cysteine;
            } else if (c3 instanceof Adenine) {
                return Stop;
            } else {
                return Tryptophan;
            }
        }
    } else if (c5 instanceof Cytosine) {
        if (c4 instanceof Uracil) {
            return Leucine;
        } else if (c4 instanceof Cytosine) {
            return Proline;
        } else if(c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return Histidine;
            } else {
                return Glutamine;
            }
        } else {
            return Arginine;
        }
    } else if (c5 instanceof Adenine) {
        if (c4 instanceof Uracil) {
            if (c3 instanceof Guanine) {
                return Methionine;
            } else {
                return Isoleucine;
            }
        } else if(c4 instanceof Cytosine) {
            return Threonine;
        } else if(c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return Asparagine;
            } else {
                return Lysine;
            }
        } else {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return Serine;
            } else {
                return Arginine;
            }
        }
    } else {
        if (c4 instanceof Uracil) {
            return Valine;
        } else if(c4 instanceof Cytosine) {
            return Alanine;
        } else if(c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return AsparticAcid;
            } else {
                return GlutamicAcid;
            }
        } else {
            return Glycine;
        }
    }
}
class Stop {
}